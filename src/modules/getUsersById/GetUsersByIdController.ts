import { Request, Response } from "express";
import { GetUsersService } from "./GetUsersByIdService";

class GetUsersController {
    constructor(private getUsersService: GetUsersService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 1) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const userIds = request.query.ids as string[]

        const user = await this.getUsersService.execute(userIds);
        if (user) {
            return response.status(200).send({success: true, data: user});
        } else {
            return response.status(404).send({success: false, message: "Server error"});
        }
    }
}

export { GetUsersController };