import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require('cors')
import userRouter from "./routes/user";
const venuesRouter = require('./routes/venues')
const venueRouter = require('./routes/venue')
const requestsRouter = require('./routes/requests')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(cors())
app.use(express.json());
app.use('/venues', venuesRouter)
app.use('/venue', venueRouter)
app.use('/user', userRouter)
app.use('/request', requestsRouter)

app.listen(3030, () => {
});

export { app }