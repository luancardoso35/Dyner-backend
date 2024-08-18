import { Request, Response } from "express";
import { SearchUserService } from "./SearchUserService";

class SearchUserController {
    constructor(private searchUserService: SearchUserService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.query).length !== 2) {
            response.status(400).json({success: false, message: "Please fill every field"})
            return
        }

        const name = request.query.name as string
        const username = request.query.username as string
        const users = await this.searchUserService.execute(name, username);
        if (users) {
            response.status(200).json({success: true, data: users})
        } else {
            response.status(404).json({success: false, message: 'Server error'})        
        }
    }
}

export { SearchUserController }