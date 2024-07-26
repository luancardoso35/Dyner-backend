import { Request, Response } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";
import { loginFactory } from "../modules/login/LoginFactory";

var express = require('express');

const userRouter = express.Router();

userRouter.post('/sign-up', function (request: Request, response: Response) {
    createUserFactory().handle(request, response)
})

userRouter.post('/sign-in', function (request: Request, response: Response) {
    loginFactory().handle(request, response)
})

export default userRouter