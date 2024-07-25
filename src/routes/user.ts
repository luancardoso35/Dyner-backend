import { Request, Response } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";

var express = require('express');

const userRouter = express.Router();

userRouter.post('/sign-up', function (request: Request, response: Response) {
    createUserFactory().handle(request, response)
})

export default userRouter