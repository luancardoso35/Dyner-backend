import { Request, Response } from "express";
import { AcceptNewFriendService } from "./AcceptNewFriendService";

class AcceptNewFriendController {
    constructor(private acceptNewFriendService: AcceptNewFriendService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 2) {
            response.status(400).send({success: false, message: "Please fill all fields"})
            return 
        }
        const newFriendId = request.body.newFriendId
        const userId = request.body.userId

        const userWithFriend = await this.acceptNewFriendService.execute(newFriendId, userId);
        console.log(userWithFriend)
        return
        if (userWithFriend) {
            return response.status(200).send({success: true, data: userWithFriend});
        } else {
            return response.status(500).send({success: false, message: "Server error"});
        }
    }
}

export { AcceptNewFriendController };