import { Request, Response } from "express";
import { GetPollRoundsService } from "./GetPollRoundsService";

class GetPollRoundsController {
    constructor(private getPollRoundsService:GetPollRoundsService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.params).length !== 1) {
            response.status(400).json({ success: false, message: 'Invalid arguments' });
            return
        } 

        const id = request.params.id as string

        const rounds = await this.getPollRoundsService.execute(id);  
        if (rounds) {
            response.status(200).json({ success: true, data: rounds });
        } else {
            response.status(500).json({ success: false, message: 'Server error' });
        }
    }
}

export { GetPollRoundsController }