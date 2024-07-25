import { Request, Response } from "express";
import { GetVenueFactory } from "../modules/getVenue/GetVenueFactory";

var express = require('express');
const venueRouter = express.Router();

venueRouter.get('/', async(request: Request, response: Response) => {
    GetVenueFactory().handle(request, response)    
})

module.exports = venueRouter;