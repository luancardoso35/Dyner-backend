import { UserRepository } from "../../repositories/prisma/UserRepository";
const jwt = require('jsonwebtoken');
const jose = require("jose");

class ResetPasswordService {
    constructor(private userRepository: UserRepository) {}

    async execute(token: string, newPassword: string) {
        const { userId } = await jose.jwtVerify(token, new TextEncoder().encode(process.env.SECRET))
        if (userId) {
            return this.userRepository.updatePassword(userId, newPassword)
        }
        return false;    
    }
}

export { ResetPasswordService };