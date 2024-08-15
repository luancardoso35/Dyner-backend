import { Request, Response } from "express";
import { RegisterVoteService } from "./RegisterVoteService";
import { VenueDTO } from "../../dao/VenueDTO";

class RegisterVoteController {
    constructor(private registerVoteService: RegisterVoteService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 3) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }

        const userId = request.body.userId as string
        const roundId = request.body.roundId as string
        const places = request.body.places as VenueDTO[]

        const voteResponse = await this.registerVoteService.execute(roundId, places, userId);
        return response.status(200).send({
            success: true, 
            ...voteResponse
        });
    }
}

export { RegisterVoteController };