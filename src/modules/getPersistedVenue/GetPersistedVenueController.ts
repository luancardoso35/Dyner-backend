import { Request, Response } from "express";
import { GetPersistedVenueService } from "./GetPersistedVenueService";

class GetPersistedVenueController {
    constructor(private getPersistedVenueService: GetPersistedVenueService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.params).length !== 1) {
            response.status(400).json({ success: false, message: 'Invalid arguments' });
            return
        } 

        const ids = request.params.ids.split(',') as string[]

        const venues = await this.getPersistedVenueService.execute(ids);    
        if (venues) {
            response.status(200).json({ success: true, data: venues });
        } else {
            response.status(500).json({ success: false, message: 'Server error' });
        }
    }
}

export { GetPersistedVenueController }