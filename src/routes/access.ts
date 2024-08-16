import { createUserFactory } from "../modules/createUser/CreateUserFactory";
import { loginFactory } from "../modules/login/LoginFactory";
import { Request, Response } from "express";

var express = require('express');

const accessRouter = express.Router();

accessRouter.post('/sign-up', function (request: Request, response: Response) {
    createUserFactory().handle(request, response)
})

accessRouter.post('/sign-in', function (request: Request, response: Response) {
    loginFactory().handle(request, response)
})