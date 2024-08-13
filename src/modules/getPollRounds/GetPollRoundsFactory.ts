import { RoundRepository } from "../../repositories/prisma/RoundRepository"
import { GetPollRoundsController } from "./GetPollRoundsController"
import { GetPollRoundsService } from "./GetPollRoundsService"

export const getPollRoundsFactory = () => {
    const roundRepository = new RoundRepository()
    const getPollRoundsService = new GetPollRoundsService(roundRepository)
    const getPollRoundsController = new GetPollRoundsController(getPollRoundsService)
    return getPollRoundsController
}