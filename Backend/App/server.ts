import express, {json, Request, Response} from 'express';
import { simpleInterest, futureValueOfAnnuity, presentValueOfSingleCashFlow, annuityOfFutureValue, futureValueOfAnnuity } from "./Calculator";
import cors from 'cors'

// Set up web app
const app = express();
app.use(json());
app.use(cors());
app.use('/static', express.static('static'));

const PORT: number = 5001
const HOST: string = 'localhost'
console.log(simpleInterest(100, 5, 1))

app.get('/', (req: Request, res: Response) => {
  res.json({'data': 'Hello, human.'})
})

app.get('/annuityOfFutureValue', (req: Request, res: Response) => {
  const {futureValue, frequency, interestRate, time} = req.query
  const annuity = annuityOfFutureValue(futureValue, frequency, interestRate, time)
  res.json({'annuity': annuity})
})

app.get('/futureValueOfAnnuity', (req: Request, res: Response) => {
  const {contribution, frequency, interestRate, time} = req.query
  const futureValue = futureValueOfAnnuity(contribution, frequency, interestRate, time)
  res.json({'futureValue': futureValue})
})



app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})