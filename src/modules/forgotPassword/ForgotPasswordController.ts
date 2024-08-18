import { Request, Response } from "express";
import { ForgotPasswordService } from "./ForgotPasswordService";

class ForgotPasswordController {
    constructor(private forgotPasswordService: ForgotPasswordService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 1) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const email = request.body.email as string

        const emailSent = await this.forgotPasswordService.execute(email);
        if (emailSent) {
            return response.status(200).send({success: true});
        } else {
            return response.status(404).send({success: false, message: "User not found"});
        }
    }
}

export { ForgotPasswordController };