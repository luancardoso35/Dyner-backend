import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const cors = require('cors')
const venuesRouter = require('./routes/venues')
const venueRouter = require('./routes/venue')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(cors())
app.use('/venues', venuesRouter)
app.use('/venue', venueRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});