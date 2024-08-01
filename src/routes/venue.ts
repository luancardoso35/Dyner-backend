import { Request, Response } from "express";
import { getVenueFactory } from "../modules/getVenue/GetVenueFactory";

var express = require('express');
const venueRouter = express.Router();

venueRouter.get('/', async(request: Request, response: Response) => {
    getVenueFactory().handle(request, response)    
})

module.exports = venueRouter;