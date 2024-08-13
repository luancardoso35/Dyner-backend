import { Request, Response } from "express";
import { GetUserPollsService } from "./GetUserPollsService";

class GetUserPollsController {
    constructor(private getUserPollsService:GetUserPollsService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 1) {
            response.status(400).json({ success: false, message: 'Invalid arguments' });
            return
        } 

        const id = request.query.id as string

        const polls = await this.getUserPollsService.execute(id);    
        if (polls) {
            response.status(200).json({ success: true, data: polls });
        } else {
            response.status(500).json({ success: false, message: 'Server error' });
        }
    }
}

export { GetUserPollsController }