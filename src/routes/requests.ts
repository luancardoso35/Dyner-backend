import { Request, Response } from "express";
import { getFriendRequestsReceivedFactory } from "../modules/getFriendRequestsReceived/GetFriendRequestsReceivedFactory";
import { handleRequestChangeFactory } from "../modules/handleRequestChange/HandleRequestChangeFactory";
import { addNewFriendFactory } from "../modules/addNewFriend/AddNewFriendFactory";

var express = require('express');
const requestsRouter = express.Router();

requestsRouter.get('/', async(request: Request, response: Response) => {
    getFriendRequestsReceivedFactory().handle(request, response)    
})

requestsRouter.post('/add-friend-request', function (request: Request, response: Response) {
    addNewFriendFactory().handle(request, response)
})

requestsRouter.post('/handle-request-change', async(request: Request, response: Response) => {
    handleRequestChangeFactory().handle(request, response)    
})



module.exports = requestsRouter;