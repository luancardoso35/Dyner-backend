import { Request, Response } from "express";
import { HandleRequestChangeService } from "./HandleRequestChangeService";

class HandleRequestChangeController {
    constructor(private handleRequestChangeService: HandleRequestChangeService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 3) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const senderId = request.body.senderId as string
        const receiverId = request.body.receiverId as string
        const accepted = request.body.accepted as boolean
        const success = await this.handleRequestChangeService.execute(senderId, receiverId, accepted);

        if (success) {
            return response.status(200).send({success: true});
        } else {
            return response.status(500).send({success: false, message: "Server error"});
        }
    }
}

export { HandleRequestChangeController };