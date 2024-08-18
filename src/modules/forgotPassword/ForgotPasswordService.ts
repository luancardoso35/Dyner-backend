import { forgotPassword } from "../../mail/forgotPassword";
import { GetUserByEmailService } from "../getUserByEmail/GetUserByEmailService";
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

class ForgotPasswordService {
    constructor(private getUserByEmailService: GetUserByEmailService) {}

    async execute(email: string) {
        const user = await this.getUserByEmailService.execute(email)
        if (user) {
            let config = {
                service: 'gmail',
                auth: {
                    user: process.env.NODEJS_GMAIL_APP_USER,
                    pass: process.env.NODEJS_GMAIL_APP_PASSWORD
                 }
            }

            const transporter = nodemailer.createTransport(config);
            const token = jwt.sign({ userId: user.id }, new TextEncoder().encode(process.env.SECRET), {
                expiresIn: 60*60,
                issuer: 'dyner.luan'
            })

            const template = forgotPassword(user.name, `${process.env.FRONTEND_URL}/reset-password/${token}`)

            let message = {
                from: 'luancaardoso10@gmail.com',
                to: email,
                subject: 'Redefinição de senha',
                html: template,
            };

            await transporter.sendMail(message)

            return true
        }

    }
}

export { ForgotPasswordService };