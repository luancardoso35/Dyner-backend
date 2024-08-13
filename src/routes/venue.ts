import { Request, Response } from "express";
import { getVenueFactory } from "../modules/getVenue/GetVenueFactory";
import { getPersistedVenueFactory } from "../modules/getPersistedVenue/GetPersistedVenueFactory";

var express = require('express');
const venueRouter = express.Router();

venueRouter.get('/', async(request: Request, response: Response) => {
    getVenueFactory().handle(request, response)    
})

venueRouter.get('/:ids', async(request: Request, response: Response) => {
    getPersistedVenueFactory().handle(request, response)    
})

module.exports = venueRouter;