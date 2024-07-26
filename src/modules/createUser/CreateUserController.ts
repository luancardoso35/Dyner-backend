import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { UserDataDAO } from "../../dao/UserDataDAO";

class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 4) {
            response.status(400).json({success: false, message: "Please fill every field"})
            return
        }
        
        const { name, email, password, avatarSeed } = request.body
        try {
            const user = await this.createUserService.execute({ name, email, password, avatarSeed } as UserDataDAO)
            if (user) {
                response.status(203).json({success: true})
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