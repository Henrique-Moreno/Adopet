import { Request, Response } from "express";
import { CreateProfileService } from "../../services/tutorProfile/CreateProfileService";

class CreateProfileController {
    async handle(req: Request, res: Response){

        const { name, telephone, city, about, } = req.body;

        const createProfileService = new CreateProfileService();

        if(!req.file) {
            throw new Error('error upload file')

        }else {

            const { originalname, filename: photograph } = req.file;

            const profile = await createProfileService.execute({ name, telephone, city, about, photograph});

            return res.json(profile)
        }
    }
}

export { CreateProfileController }