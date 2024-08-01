import { Request, Response } from "express";
import { AddNewFriendService } from "./AddNewFriendService";

class AddNewFriendController {
    constructor(private userService: AddNewFriendService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 2) {
            response.status(400).send({success: false, message: "Please fill all fields"})
            return 
        }
        const firstUserId = request.body.senderId
        const receiverId = request.body.receiverId

        const success = await this.userService.execute(firstUserId, receiverId);
        if (success) {
            return response.status(200).send({success: true});
        } else {
            return response.status(500).send({success: false, message: "Server error"});
        }
    }
}

export { AddNewFriendController };