import { Request, Response } from "express";
import { GetUserService } from "./GetUserService";

class GetUserController {
    constructor(private userService: GetUserService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 1) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const userId = request.query.id as string

        const user = await this.userService.execute(userId);
        if (user) {
            return response.status(200).send({success: true, data: user});
        } else {
            return response.status(404).send({success: false, message: "User not found"});
        }
    }
}

export { GetUserController };