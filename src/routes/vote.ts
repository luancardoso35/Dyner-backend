import { Request, Response } from "express";
import { getUserVoteOnRoundFactory } from "../modules/getUserVoteOnRound/GetUserVoteOnRoundFactory";
import { registerVoteFactory } from "../modules/registerVote/RegisterVoteFactory";

var express = require('express');
const voteRouter = express.Router();

voteRouter.get('/', async(request: Request, response: Response) => {
    getUserVoteOnRoundFactory().handle(request, response)    
})

voteRouter.post('/', async(request: Request, response: Response) => {
    registerVoteFactory().handle(request, response)    
})

module.exports = voteRouter;