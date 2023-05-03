import prismaClient from "../../prisma";

class SeekShelterService {
    async execute() {
        const shelter = await prismaClient.shelter.findFirst({
            where: {
                
            }
        })

    }
}

export { SeekShelterService }