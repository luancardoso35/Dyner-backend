import { PollRepository } from "../../repositories/prisma/PollRepository"
import { GetUserPollsController } from "./GetUserPollsController"
import { GetUserPollsService } from "./GetUserPollsService"

export const getUserPollsFactory = () => {
    const pollRepository = new PollRepository()
    const getUserPollsService = new GetUserPollsService(pollRepository)
    const getUserPollsController = new GetUserPollsController(getUserPollsService)
    return getUserPollsController
}