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
const futureValueOfAnnuity = (principal: number, interestRate: number, time: number) => {
    const r: number = interestRate / 100
    const futureValue: number = principal * ((((1 + r) ** time) - 1) / r)
    return futureValue.toFixed(2)
}

// How much to invest each year to have $55.26 in 5 years at 5% p.a.?
const annuityOfFutureValue = (futureValue: number, interestRate: number, time: number) => {
    const r: number = interestRate / 100
    const annuity: number = futureValue / ((((1 + r) ** time) - 1) / r)
    return annuity.toFixed(2)
}

// console.log(simpleInterest(100, 6, 1.5))
// console.log(presentValueOfSingleCashFlow(100, 5, 5))
// console.log(futureValueOfAnnuity(10, 5, 5))
// console.log(annuityOfFutureValue(55.26, 5, 5))

export {simpleInterest, presentValueOfSingleCashFlow, futureValueOfAnnuity, annuityOfFutureValue}

//   MONEY
// How much is your goal?
// How much do you currently have?
// What is your expected interest?
// When do you want to achieve this goal? OR How much can you invest yearly?


// Financial Independence Example
// Current Age: 30
// Independence Age: 60
// Future Expenses: $100,000 growing at 1% p.a. in real terms
// Current Savings: $150,000 invested at 6% p.a. in real terms
