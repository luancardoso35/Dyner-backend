import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { UserDTO } from "../../dao/UserDTO";
import { env } from "process";
const jwt = require('jsonwebtoken');

class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 5) {
            response.status(400).json({success: false, message: "Please fill every field"})
            return
        }
        
        const { name, email, password, avatarSeed } = request.body
        try {
            const user = await this.createUserService.execute({ name, email, password, avatarSeed } as UserDTO)
            if (user) {
                const token = jwt.sign({ userId: user.id }, new TextEncoder().encode(env.SECRET), {
                    expiresIn: 60*60*24*365,
                    issuer: 'dyner.luan'
                })

                response.status(203).json({success: true, data: user, token})
            } else {
                response.status(400).json({success: false, message: "Fill every field"})
            }
            return
        } catch (error) {
            if (error instanceof Error && error.message === "User already exists") {
                response.status(409).json({ success: false, message: "User already exists"})
                return
            } else {
                response.status(500).json({ success: false, message: "Something went wrong"})
                return
            }
        }
    }
}

export { CreateUserController }