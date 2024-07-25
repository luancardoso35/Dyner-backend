import { GetVenueController } from "./GetVenueController";
import { GetVenueService } from "./GetVenueService";

export const GetVenueFactory = () => {
    const getVenueService = new GetVenueService();
    const getVenueController = new GetVenueController(getVenueService);
    return getVenueController;
}