import { useState, useEffect } from 'react'
import Header from './Header'
import { Button } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div style={{fontSize: '1.2rem', padding: '1rem', width: '60%', margin: 'auto'}}>
                <p>Want to start planning your home finances?</p>
                <Button variant='outlined' onClick={() => navigate('/myHomePlan')} endIcon={<KeyboardDoubleArrowRightIcon />}>Click here</Button>
                <p>Need to save a particular amount in a targeted time but don't know how to achieve it?</p>
                <Button variant='outlined' onClick={() => navigate('/myFinancialPlan')} endIcon={<KeyboardDoubleArrowRightIcon />}>Click here</Button>
                <p>Want to know the future value of your regulary contribution?</p>
                <Button variant='outlined' onClick={() => navigate('/myFinancialPlan')} endIcon={<KeyboardDoubleArrowRightIcon />}>Click here</Button>
                <p></p>
            </div>
        </>
    )
}

export default HomePage