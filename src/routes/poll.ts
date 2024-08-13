import { Request, Response } from "express";
import { createPollFactory } from "../modules/createPoll/CreatePollFactory";
import { getUserPollsFactory } from "../modules/getUserPolls/GetUserPollsFactory";
import { getPollRoundsFactory } from "../modules/getPollRounds/GetPollRoundsFactory";

var express = require('express');
const venueRouter = express.Router();

venueRouter.post('/', async(request: Request, response: Response) => {
    createPollFactory().handle(request, response)    
})

venueRouter.get('/', async(request: Request, response: Response) => {
    getUserPollsFactory().handle(request, response)    
})

venueRouter.get('/:id/rounds', async(request: Request, response: Response) => {
    getPollRoundsFactory().handle(request, response)    
})

module.exports = venueRouter;