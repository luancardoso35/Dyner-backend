import { Request, Response } from "express";
import { LoginService } from "./LoginService";
import { UserLoginDataDAO } from "../../dao/UserLoginDataDAO";
import { env } from "process";
const jwt = require('jsonwebtoken');

class LoginController {
    constructor(private loginService: LoginService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 2) {
            response.status(400).send({ success: false, message: "Please fill every field"})
            return
        }

        const { email, password } = request.body
        const user = await this.loginService.execute({ email, password } as UserLoginDataDAO)
        if (!user) {
            response.status(404).send({ success: false, message: "Wrong username or password"})
            return
        }

        const token = jwt.sign({ user }, env.SECRET, {
            expiresIn: 60*60*1,
            issuer: 'dyner.luan'
        })

        response.status(200).send({ success: true, data: user, token})
    }
}

export { LoginController }