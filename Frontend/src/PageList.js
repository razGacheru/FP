import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Form from './Components/Form'
import HomePage from './Components/HomePage'
import HomePlan from './Components/HomePlan'

function Greet() {
    return <h1> Hello </h1>
}
function PageList() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage /> }/>
                <Route path='/myFinancialPlan' element={<Form /> }/>
                <Route path='/myHomePlan' element={<HomePlan /> }/>
            </Routes>
        </div>
    )
}

export default PageList