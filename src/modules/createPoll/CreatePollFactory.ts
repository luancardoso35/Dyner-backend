import { PollRepository } from "../../repositories/prisma/PollRepository"
import { UserRepository } from "../../repositories/prisma/UserRepository"
import { CreatePollController } from "./CreatePollController"
import { CreatePollService } from "./CreatePollService"

export const createPollFactory = () => {
    const pollRepository = new PollRepository()
    const userRepository = new UserRepository()
    const createPollService = new CreatePollService(pollRepository, userRepository)
    const createPollController = new CreatePollController(createPollService)
    return createPollController
}