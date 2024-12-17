import React from 'react'
import { useState, useEffect } from 'react';
import Block from './Block';
import SelectVariants from './SelectVariants';

export default function FutureValueOfAnnuity() {
    const [name, setName] = useState('');
    const [contribution, setContribution] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [futureValueOfAnnuity, setFutureValueOfAnnuity] = useState(null);
    const [frequency, setFrequency] = useState('yearly')

    const getFutureValueOfAnnuity = async () => {
        try {
            const params = {
                contribution,
                interestRate,
                time,
                frequency,
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
            console.log('hehe')
            getFutureValueOfAnnuity();
            console.log('hehe')
        } else {
            setFutureValueOfAnnuity(null); // Clear futureValueOfAnnuity if not all inputs are filled
        }
    }, [contribution, frequency, interestRate, time]);

    return (
        <>
            <div style={{width: '50%', margin: 'auto', fontSize: '1.2rem'}}>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <label for="nameField">Name</label>
                    <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem', border: 'none'}}
                    id="nameField"
                    type="text"
                    value={"ROLAND JOSEPH"}
                    disabled
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <label for="contribution">Contribution</label>
                    <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem'}}
                    id="contribution"
                    type="number"
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                    />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <label for="yearlyInterest">Expected Yearly Interest</label>
                    <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem'}}
                    id="yearlyInterest"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <label for="targetTimeFrame">Target Timeframe</label>
                    <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem'}}
                    id="targetTimeFrame"
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                <label for="frequencyField">Contribution Frequency</label>
                <SelectVariants frequency={frequency} setFrequency={setFrequency}/>
            </div>
            </div>
            <br /> <br />
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
                        <p>How much will we have in {time} years if we invest ${contribution} {frequency} at {interestRate}% p.a.?</p>
                        <h3>{futureValueOfAnnuity != null ? <Block value={futureValueOfAnnuity} /> : 'Loading...'}</h3>
                        <br /> <br />
                        <p style={{ fontStyle: 'italic', width: '60%', margin: 'auto' }}>
                            Note: Deeznuts
                        </p>
                    </>
            }
        </>
    )
}