import { useState, useEffect } from 'react';
import AnnuityOfFutureValue from './AnnuityOfFutureValue';
import FutureValueOfAnnuity from './FutureValueOfAnnuity';
import Header from './Header'

export default function Form() {
    const [greet, setGreet] = useState('Hello, human.');
    const [calculationType, setCalculationType] = useState(null);

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
        <>
            <Header />
            <div style={{ padding: '10px', textAlign: 'center' }}>
                <p style={{fontSize: "1.5rem"}}>{greet} Let's calculate your Financial Goal 💰📝📈</p>
                <br />
                <label htmlFor="mySelect">Choose an option: </label>
                <select id="mySelect" value={calculationType} onChange={(e) => setCalculationType(e.target.value)}>
                    <option value="" default>Select an option</option>
                    <option value="Annuity of Future Value">Annuity of Future Value</option>
                    <option value="Future Value of Annuity">Future Value of Annuity</option>
                </select>
                <br />
                <br />
                <br /> <br />
                {calculationType && (calculationType === 'Annuity of Future Value' ? <AnnuityOfFutureValue /> : <FutureValueOfAnnuity />)}
                <br /> <br />
            </div>
        </>
    );
}
