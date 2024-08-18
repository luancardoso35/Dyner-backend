import { Request, Response } from "express";
import { searchUserFactory } from "../modules/searchUser/SearchUserFactory";
import { getUserFactory } from "../modules/getUserById/GetUserFactory";
import { getUsersFactory } from "../modules/getUsersById/GetUsersByIdFactory";
import { acceptNewFriendFactory } from "../modules/acceptNewFriend/AcceptNewFriendFactory";
import { forgotPasswordFactory } from "../modules/forgotPassword/ForgotPasswordFactory";
import { resetPasswordFactory } from "../modules/resetPassword/ResetPasswordFactory";

var express = require('express');

const userRouter = express.Router();

userRouter.get('/get-by-id', function (request: Request, response: Response) {
    getUserFactory().handle(request, response)
})

userRouter.post('/forgot-password', function (request: Request, response: Response) {
    forgotPasswordFactory().handle(request, response)
})

userRouter.post('/reset-password', function (request: Request, response: Response) {
    resetPasswordFactory().handle(request, response)
})

userRouter.get('/get-by-ids', function (request: Request, response: Response) {
    getUsersFactory().handle(request, response)
})

userRouter.get('/search-friends', function (request: Request, response: Response) {
    searchUserFactory().handle(request, response)
})

userRouter.post('/add-friend', function (request: Request, response: Response) {
    acceptNewFriendFactory().handle(request, response)
})

module.exports = userRouter
