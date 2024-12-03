import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Form from './Components/Form'

function Greet() {
    return <h1> Hello </h1>
}
function PageList() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header /> }/>
                <Route path='/Form' element={<Form /> }/>
            </Routes>
        </div>
    )
}

export default PageList