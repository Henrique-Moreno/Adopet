import prismaClient from "../../prisma";

interface PerfilRequest {
    name: string;
    telephone: string;
    city: string;
    about: string;
    photograph: string; 
}

class CreateProfileService {
    async execute({name, telephone, city, about, photograph}: PerfilRequest) {

        const profile = await prismaClient.profile.create({
            data: {
                name: name,
                telephone: telephone,
                city: city,
                about: about,
                photograph: photograph
            }
        })
        return profile;

    }
}

export { CreateProfileService }