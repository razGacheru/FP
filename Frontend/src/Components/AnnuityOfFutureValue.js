import React from 'react'
import { useState, useEffect } from 'react';
import Block from './Block';

export default function AnnuityOfFutureValue() {
    const [name, setName] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [greet, setGreet] = useState('');
    const [annuity, setAnnuity] = useState(null);

    const annuityOfFutureValue = async () => {
        try {
            const params = {
                futureValue,
                interestRate,
                time,
            };

            const queryString = new URLSearchParams(params).toString();
            const response = await fetch(`http://localhost:5001/annuityOfFutureValue?${queryString}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            });

            const data = await response.json();
            if (!response.ok) {
                setAnnuity('Error: Could not fetch annuity');
            } else {
                setAnnuity(data.annuity);
            }
        } catch (error) {
            setAnnuity('Error: Network or server issue');
        }
    };

    useEffect(() => {
        if (futureValue && interestRate && time) {
            annuityOfFutureValue();
        } else {
            setAnnuity(null); // Clear annuity if not all inputs are filled
        }
    }, [futureValue, interestRate, time]);

    return (
        <>
            Name: <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br /> <br />
            Goal: <input
            type="number"
            value={futureValue}
            onChange={(e) => setFutureValue(e.target.value)}
            />
            <br /> <br />
            Expected Interest Rate: <input
            type="number"
            placeholder="% in years"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            />
            <br /> <br />
            Target Timeframe: <input
            type="number"
            placeholder="in years"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            />
            <br />
            {
                interestRate &&
                time &&
                futureValue &&
                <>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><span style={{ fontStyle: 'italic' }}>Goal:</span> ${futureValue}</li>
                            <li><span style={{ fontStyle: 'italic' }}>Rate:</span> {interestRate}%</li>
                            <li><span style={{ fontStyle: 'italic' }}>Target:</span> {time} years</li>
                        </ul>
                        <br /> <hr /> <br />
                        <h2>Annuity of Future Value</h2>
                        <p>How much to invest each year to have ${futureValue} in {time} years at {interestRate}% p.a.?</p>
                        <h3>{annuity != null ? <Block value={annuity}/> : 'Loading...'}</h3>
                        
                        <p style={{ fontStyle: 'italic', width: '60%', margin: 'auto' }}>
                            Note: the financial goal of ${futureValue} is achieved, approximately, at the start of {time}{time == 1 ? 'st' : time == 2 ? 'nd' : time == 3 ? 'rd' : 'th'} year after you start saving -
                            assuming you are consistent with saving.
                        </p>
                    </>
            }
        </>
    )
}