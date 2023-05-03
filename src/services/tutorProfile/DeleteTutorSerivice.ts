import prismaClient from "../../prisma";

interface DeleteTutorRequest {
    id: string
}

class DeleteTutorSerivice {
    async execute({ id }: DeleteTutorRequest){

        const tutor = await prismaClient.profile.delete({
             where: {
                id: id
             }
        })

        return tutor;

    }
}

export { DeleteTutorSerivice }