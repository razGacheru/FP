import React from 'react'
import Header from './Header'

const HomePlan = () => {
  return (
    <>
        <Header />
        <div style={{ padding: '10px', textAlign: 'center' }}>
            <p style={{fontSize: "1.5rem"}}>Roland Joseph's Plan</p>
            <p>Goal: paid-off mortgage and saved $1m in 20 years. Possibly FIRE at 50 years old.</p>
            <p>Note: All exceeds goes to leisure</p>
            <div style={{border: '2px solid', borderRadius: '10px'}}>
              <h3>25-29</h3>
              <p>Target: 70,000 annually before-tax</p>
              <ul>
                <li>After-tax: 1,058 per week</li>
                <ul>
                  <li>Mortgage HISA: 500 weekly</li>
                  <li>First Home Super Saver Scheme (FHSS): 300 weekly</li>
                  <li>Foods, travel, etc: 200 weekly</li>
                  <li>Leisure: 100 weekly</li>
                  <li>Rent: 200</li>
                </ul>
                <hr />
                <li>Total expenses: 1,300 per week</li>
                <li style={{color: 'red'}}>Leftover money: -242 per week</li>
              </ul>
            </div>
            <br /> <br />
            <div style={{border: '2px solid', borderRadius: '10px'}}>
              <h3>30+</h3>
              <p>Target: 120,000 annually before-tax</p>
              <ul>
                <li>After-tax: 1,746 per week</li>
                <ul>
                  <li>Mortgage Repayment: 600 weekly</li>
                  <li>Foods, travel, etc: 350 weekly</li>
                  <li>Leisure: 250 weekly</li>
                  <li>Exchange Traded Funds (ETF): 300 weekly</li>
                </ul>
                <hr />
                <li>Total expenses: 1,500 per week</li>
                <li style={{color: 'green'}}>Leftover money: 246 per week</li>
              </ul>
          </div>
        </div>
    </>
  )
}

export default HomePlan