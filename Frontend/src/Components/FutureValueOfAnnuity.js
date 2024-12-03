import React from 'react'
import { useState, useEffect } from 'react';

export default function FutureValueOfAnnuity() {
    const [name, setName] = useState('');
    const [contribution, setContribution] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [greet, setGreet] = useState('');
    const [futureValueOfAnnuity, setFutureValueOfAnnuity] = useState(null);

    const getFutureValueOfAnnuity = async () => {
        try {
            const params = {
                contribution,
                interestRate,
                time,
            };

            const queryString = new URLSearchParams(params).toString();
            const response = await fetch(`http://localhost:5001/futureValueOfAnnuity?${queryString}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            });

            const data = await response.json();
            if (!response.ok) {
                setFutureValueOfAnnuity('Error: Could not fetch future value of futureValueOfAnnuity');
            } else {
                setFutureValueOfAnnuity(data.futureValue);
            }
        } catch (error) {
            setFutureValueOfAnnuity('Error: Network or server issue');
        }
    };

    useEffect(() => {
        if (contribution && interestRate && time) {
            getFutureValueOfAnnuity();
        } else {
            setFutureValueOfAnnuity(null); // Clear futureValueOfAnnuity if not all inputs are filled
        }
    }, [contribution, interestRate, time]);

    return (
        <>
            Name: <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br /> <br />
            Yearly Contribution: <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
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
                contribution &&
                <>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><span style={{ fontStyle: 'italic' }}>Goal:</span> ${contribution}</li>
                            <li><span style={{ fontStyle: 'italic' }}>Rate:</span> {interestRate}%</li>
                            <li><span style={{ fontStyle: 'italic' }}>Target:</span> {time} years</li>
                        </ul>
                        <br /> <hr /> <br />
                        <h2>Future Value of Annuity</h2>
                        <p>How much will we have in {time} years if we invest ${contribution} per year at {interestRate}% p.a.?</p>
                        <h3>{futureValueOfAnnuity != null ? `$${futureValueOfAnnuity} per year` : 'Loading...'}</h3>
                        <br /> <br />
                        <p style={{ fontStyle: 'italic', width: '60%', margin: 'auto' }}>
                            Note: the financial goal of ${contribution} is achieved, approximately, at the start of {time}{time == 1 ? 'st' : time == 2 ? 'nd' : time == 3 ? 'rd' : 'th'} year after you start saving -
                            assuming you are consistent with saving.
                        </p>
                    </>
            }
        </>
    )
}