import prismaClient from "../../prisma";

interface EditTutorRequest {
    id: string;
    name: string;
    telephone: string;
    city: string;
    about: string;
    photograph: string; 
}

class EditTutorService {
    async execute({id, name, telephone, city, about, photograph}: EditTutorRequest) {

        const tutor = await prismaClient.profile.update({
            where: {
                id: id
            },
            data: {
                name: name,
                telephone: telephone,
                city: city,
                about: about,
                photograph: photograph
            }
        })

        return tutor;

    }
}

export { EditTutorService }