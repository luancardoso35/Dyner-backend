import { PrismaClient } from "@prisma/client";
import { IFriendRequestRepository } from "../IFriendRequestRepository";

const prisma = new PrismaClient();

export class FriendRequestRepository implements IFriendRequestRepository {
    async addFriendRequest(firstUserId: string, secondUserId: string): Promise<boolean> {
        try {
            await prisma.friendshipRequest.create({
                data: {
                    senderId: firstUserId,
                    receiverId: secondUserId,
                    friendshipStatus: 'PENDING'
                }
            })
    
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getReceivedRequestsByUserId(id: string): Promise<string[]> {
        const senders = await prisma.friendshipRequest.findMany({
            where: {
                receiverId: id,
                friendshipStatus: "PENDING"
            }
        })

        return senders.map(sender => sender.senderId) ?? []
    }

    async getAllRequestedPeopleById(id: string): Promise<string[]> {
        console.log(id)
        const senders = await prisma.friendshipRequest.findMany({
            where: {
                receiverId: id,
                friendshipStatus: "PENDING"
            }
        })

        const receivers = await prisma.friendshipRequest.findMany({
            where: {
                senderId: id,
                friendshipStatus: "PENDING"
            }
        })

        return [...new Set([...senders.map(sender => sender.senderId), ...receivers.map(receiver => receiver.receiverId)])] ?? []
    }

    async handleFriendRequestChange(senderId: string, receiverId: string, accepted: boolean): Promise<boolean> {
        try {
            const response = await prisma.friendshipRequest.updateMany({
                where: {
                    receiverId,
                    senderId,
                    friendshipStatus: 'PENDING'
                },
                data: {
                    friendshipStatus: accepted ? 'ACCEPTED' : 'REJECTED'
                }
            })

            return response ? true : false
        } catch(error) {
            console.log(error)
            return false;
        }
    }

}