import { VenueRepository } from "../../repositories/prisma/VenueRepository"
import { GetPersistedVenueController } from "./GetPersistedVenueController"
import { GetPersistedVenueService } from "./GetPersistedVenueService"

export const getPersistedVenueFactory = () => {
    const venueRepository = new VenueRepository()
    const getPersistedVenueService = new GetPersistedVenueService(venueRepository)
    const getPersistedVenueController = new GetPersistedVenueController(getPersistedVenueService)
    return getPersistedVenueController
}