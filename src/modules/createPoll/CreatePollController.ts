import { Request, Response } from "express";
import { CreatePollService } from "./CreatePollService";

class CreatePollController {
    constructor(private createPollService: CreatePollService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 2) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const participants = request.body.participants as string[]
        const venues = request.body.venues as any

        
        const pollWasCreated = await this.createPollService.execute(participants, venues);
        return response.status(200).send({success: pollWasCreated});
    }
}

export { CreatePollController };