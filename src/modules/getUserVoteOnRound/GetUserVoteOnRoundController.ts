import { Request, Response } from "express";
import { GetUserVoteOnRoundService } from "./GetUserVoteOnRoundService";

class GetUserVoteOnRoundController {
    constructor(private getUserVoteOnRoundService: GetUserVoteOnRoundService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 2) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const userId = request.query.userId as string
        const roundId = request.query.roundId as string

        const vote = await this.getUserVoteOnRoundService.execute(roundId, userId);
        return response.status(200).send({success: true, data: vote});
    }
}

export { GetUserVoteOnRoundController };