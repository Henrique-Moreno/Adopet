import prismaClient from "../../prisma";

interface AuthRequest {
    name: string;
}

class AuthShelterService {
    async execute({ name }: AuthRequest) {

        const shelter = await prismaClient.shelter.findFirst({
            where: {
                name: name
            }
        })

        if(!shelter) {
            throw new Error("shelter not found")
        }

        return { ok: true}

    }

}

export { AuthShelterService }