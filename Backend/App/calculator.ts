const frequencyConvert = (interestRate: number, time: number) => {
    return [interestRate, time] = [interestRate / 12, time * 12]
} 

// Sample, not useful! How much will we have in 1.5 years if we invest $100 at 6% fixed principal interest?
const simpleInterest = (principal: number, interestRate: number, time: number) => {
    const r: number = interestRate / 100
    const profit: number = principal * r * time
    return (principal + profit).toFixed(2)
}

// How much do we invest now to have $100 in 5 years invested at 5% p.a.?
const presentValueOfSingleCashFlow = (futureValue: number, interestRate: number, time: number) => {
    const r: number = interestRate / 100
    const yearlySavings: number = futureValue / ((1 + r)**time)
    return yearlySavings.toFixed(2)
}

// How much will we have in 5 years if we invest $10 per year at 5% p.a.?
const futureValueOfAnnuity = (principal: number, frequency: string, interestRate: number, time: number) => {
    let r: number = interestRate / 100
    if (frequency == 'monthly') {
        [r, time] = frequencyConvert(r, time)
    }
    const futureValue: number = principal * ((((1 + r) ** time) - 1) / r)
    return (futureValue).toFixed(2)
}

// How much to invest each year to have $55.26 in 5 years at 5% p.a.?
const annuityOfFutureValue = (futureValue: number, frequency: string, interestRate: number, time: number) => {
    let r: number = interestRate / 100
    if (frequency == 'monthly') {
        [r, time] = frequencyConvert(r, time)
    }
    const annuity: number = futureValue / ((((1 + r) ** time) - 1) / r)
    return (annuity).toFixed(2)
}

export {simpleInterest, presentValueOfSingleCashFlow, futureValueOfAnnuity, annuityOfFutureValue}
