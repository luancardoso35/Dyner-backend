import { PrismaClient } from "@prisma/client";
import { IVenueRepository } from "../IVenueRepository";
import { VenueDTO } from "../../dao/VenueDTO";

const prisma = new PrismaClient();

export class VenueRepository implements IVenueRepository {
    async create(id: string, name: string, address: string): Promise<string | null | undefined> {
        const place = await prisma.venue.create({
            data: {
                id,
                name,
                address,
            } 
        }) as VenueDTO

        if (place) {
            return place.id
        }

        return null
    }

    async get(ids: string[]): Promise<VenueDTO[]> {
        const venues = await prisma.venue.findMany({
            where: {
                id: {
                    in: ids
                }
            }
        }) as VenueDTO[]

        return venues ?? []
    }
}