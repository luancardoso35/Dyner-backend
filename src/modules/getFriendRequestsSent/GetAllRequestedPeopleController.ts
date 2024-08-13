import { Request, Response } from "express";
import { GetAllRequestedPeopleService } from "./GetAllRequestedPeopleService";

class GetAllRequestedPeopleController {
    constructor(private friendRequestService: GetAllRequestedPeopleService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 1) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const userId = request.query.userId as string
        const users = await this.friendRequestService.execute(userId);
        if (users) {
            return response.status(200).send({success: true, data: users});
        } else {
            return response.status(404).send({success: false, message: "Server error"});
        }
    }
}

export { GetAllRequestedPeopleController };