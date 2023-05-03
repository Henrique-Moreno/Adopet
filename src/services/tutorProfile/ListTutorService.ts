import prismaClient from "../../prisma";

class ListTutorService {
    async execute() {
        const tutor = await prismaClient.profile.findMany({
            select: {
                id: true,
                name: true,
                telephone: true,
                city: true,
                about: true,
                photograph: true
            }
        })

        if(!tutor) {
            throw new Error('no tutor not found')
        }
        
        return tutor;
    }
}

export { ListTutorService }