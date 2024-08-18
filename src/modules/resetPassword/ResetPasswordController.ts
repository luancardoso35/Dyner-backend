import { Request, Response } from "express";
import { ResetPasswordService } from "./ResetPasswordService";
import { Prisma } from "@prisma/client";

class ResetPasswordController {
    constructor(private resetPasswordService: ResetPasswordService) {}

    async handle(request: Request, response: Response) {
        if (Object.keys(request.body).length !== 2) {
            response.status(400).send({success: false, message: "Bad request"})
            return 
        }
        const token = request.body.token as string
        const newPassword = request.body.newPassword as string

        try {
            const changedPassword = await this.resetPasswordService.execute(token, newPassword);
            if (changedPassword) {
                return response.status(200).send({success: true});
            }
        } catch (error: any) {
            let errorMessage = ''

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2001') {
                    errorMessage = 'User not found.'
                  }
            } else {
                switch (error.message) {
                    case '"exp" claim timestamp check failed':
                        errorMessage = 'Token expired.';
                        break;
                    case 'Invalid Compact JWS':
                        errorMessage = 'Invalid token.'
                        break;
                    default: 
                        errorMessage = 'Server error.'
                        break
                }
            }

            return response.status(404).send({success: false, message: errorMessage});
        }
    }
}

export { ResetPasswordController };