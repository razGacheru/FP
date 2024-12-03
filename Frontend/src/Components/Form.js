import { useState, useEffect } from 'react';
import AnnuityOfFutureValue from './AnnuityOfFutureValue';
import FutureValueOfAnnuity from './FutureValueOfAnnuity';

export default function Form() {
    const [name, setName] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [greet, setGreet] = useState('');
    const [annuity, setAnnuity] = useState(null);
    const [calculationType, setCalculationType] = useState('Annuity of Future Value');

    // Function to fetch the greet message
    const simpleInterest = async () => {
        try {
            const response = await fetch('http://localhost:5001/', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            });
            const data = await response.json();
            if (!response.ok) {
                setGreet('Error: Could not fetch greet data');
            } else {
                setGreet(data.data || 'Welcome!');
            }
        } catch (error) {
            setGreet('Error: Network or server issue');
        }
    };


    useEffect(() => {
        simpleInterest();
    }, []);

    return (
        <div style={{ padding: '10px', textAlign: 'center' }}>
            <h2>{greet} Let's calculate your Financial Goal.</h2>
            <br />
            <label htmlFor="mySelect">Choose an option: </label>
            <select id="mySelect" value={calculationType} onChange={(e) => setCalculationType(e.target.value)}>
                <option value="Annuity of Future Value">Annuity of Future Value</option>
                <option value="Future Value of Annuity">Future Value of Annuity</option>
            </select>
            <br /> <br />
            {calculationType === 'Annuity of Future Value' ? <AnnuityOfFutureValue /> : <FutureValueOfAnnuity />}
        </div>
    );
}
