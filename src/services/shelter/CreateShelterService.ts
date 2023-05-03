import prismaClient from "../../prisma";

interface ShelterRequest {
    name: string;
}

class CreateShelterService {
    async execute({ name }: ShelterRequest) {

        if(name === '') {
            throw new Error('Name invalid')
        }

        const shelter = await prismaClient.shelter.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            }
        })

        return shelter
    }
}

export { CreateShelterService }