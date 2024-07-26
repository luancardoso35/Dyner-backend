import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user";
const cors = require('cors')
const venuesRouter = require('./routes/venues')
const venueRouter = require('./routes/venue')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(cors())
app.use(express.json());
app.use('/venues', venuesRouter)
app.use('/venue', venueRouter)
app.use('/user', userRouter)

app.listen(3030, () => {
});

export { app }