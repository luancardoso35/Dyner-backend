import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require('cors')
const userRouter = require('./routes/user')
const venuesRouter = require('./routes/venues')
const venueRouter = require('./routes/venue')
const requestsRouter = require('./routes/requests')
const pollRouter = require('./routes/poll')
const voteRouter = require('./routes/vote')
const accessRouter = require('./routes/access')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(cors({
    origin: ['http://localhost:3000', 'https://dyner-frontend.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(express.json());
app.use('/venues', venuesRouter)
app.use('/venue', venueRouter)
app.use('/user', userRouter)
app.use('/', accessRouter)
app.use('/request', requestsRouter)
app.use('/poll', pollRouter)
app.use('/vote', voteRouter)

app.listen(port, () => {
});

export { app }