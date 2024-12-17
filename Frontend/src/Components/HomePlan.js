import React from 'react'
import Header from './Header'

const HomePlan = () => {
  return (
    <>
        <Header />
        <div style={{ padding: '10px', textAlign: 'center' }}>
            <p style={{fontSize: "1.5rem"}}>Home Plan</p>
            {/* <br />
            <label htmlFor="mySelect">Choose an option: </label>
            <select id="mySelect" value={calculationType} onChange={(e) => setCalculationType(e.target.value)}>
                <option value="Annuity of Future Value">Annuity of Future Value</option>
                <option value="Future Value of Annuity">Future Value of Annuity</option>
            </select>
            <br />
            <br />
            <br /> <br />
            {calculationType === 'Annuity of Future Value' ? <AnnuityOfFutureValue /> : <FutureValueOfAnnuity />}
            <br /> <br /> */}
        </div>
    </>
  )
}

export default HomePlan