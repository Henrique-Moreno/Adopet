import { Request, Response } from "express";
import { ListTutorService } from "../../services/tutorProfile/ListTutorService";

class ListTutorController {
    async handle(req: Request, res: Response) {
        
        const listTutorService = new ListTutorService();

        const tutor = await listTutorService.execute();

        return res.json(tutor);
    }
}

export { ListTutorController }