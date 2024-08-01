import { GetVenueController } from "./GetVenueController";
import { GetVenueService } from "./GetVenueService";

export const getVenueFactory = () => {
    const getVenueService = new GetVenueService();
    const getVenueController = new GetVenueController(getVenueService);
    return getVenueController;
}