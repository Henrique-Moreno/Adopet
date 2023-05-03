import prismaClient from "../../prisma";

class ListShelterService {
    async execute() {

        const shelter = await prismaClient.shelter.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return shelter;
    }
}

export { ListShelterService }