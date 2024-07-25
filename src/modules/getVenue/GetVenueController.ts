import { Request, Response } from "express";
import { GetVenueService } from "./GetVenueService";

class GetVenueController {
    constructor(private getVenueService:GetVenueService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 3) {
            response.status(400).json({ success: false, message: 'Invalid arguments' });
        } else {
            const lat = parseFloat(request.query.lat as string)
            const lng = parseFloat(request.query.lng as string)
            const searchQuery = (request.query.query as string)
            const venuesResponse = await this.getVenueService.execute({lat, lng, searchQuery});
            response.status(venuesResponse.status).json({ success: venuesResponse.status == 200, data: venuesResponse.data })
        }
    }
}

export { GetVenueController }