import React from 'react'
import { useState, useEffect } from 'react';
import Block from './Block';
import SelectVariants from './SelectVariants';

export default function AnnuityOfFutureValue() {
    const [name, setName] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [greet, setGreet] = useState('');
    const [annuity, setAnnuity] = useState(null);
    const [frequency, setFrequency] = useState('yearly')

    const annuityOfFutureValue = async () => {
        try {
            const params = {
                futureValue,
                frequency,
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
                console.log(data.annuity)
                console.log('data.annuity')
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
    }, [futureValue, frequency, interestRate, time]);

    return (
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
                <label for="goalField">Goal</label>
                <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem'}}
                id="goalField"
                type="number"
                value={futureValue}
                onChange={(e) => setFutureValue(e.target.value)}
                />
            </div>
            <br />
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <label for="yearlyInterestField">Expected Yearly Interest</label>
                <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem'}}
                id="yearlyInterestField"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                />
            </div>
            <br />
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <label for="timeFrameField">Expected Time Frame</label>
                <input style={{padding: '.5rem', boxShadow: 'none', fontSize: '1rem'}}
                id="timeFrameField"
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
                            <li><span style={{ fontStyle: 'italic' }}>Contribution:</span> {frequency}</li>
                        </ul>
                        <br /> <hr /> <br />
                        <h2>Annuity of Future Value</h2>
                        <p>How much to invest {frequency} to have ${futureValue} in {time} years at {interestRate}% p.a.?</p>
                        <h3>{annuity != null ? <Block value={annuity} /> : 'Loading...'}</h3>
                        
                        <p style={{ fontStyle: 'italic', width: '60%', margin: 'auto' }}>
                            Note: Make contribution at the start of each {frequency} to achieve goal at the start of {time} years after the first contribution. 
                        </p>
                    </>
            }
        </div>
    )
}