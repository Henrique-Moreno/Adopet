import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequet {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: UserRequet) {
       
        if(!email) {
            throw new Error('Email incorrect')
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error('User already exists')
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                email: true,
                password: true,
            }
        })
        return user;
    }
}

export { CreateUserService }