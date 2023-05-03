import { Request, Response } from "express";
import { EditTutorService } from "../../services/tutorProfile/EditTutorService";

class EditTutorController {
    async handle(req: Request, res: Response) {
        const {id, name, telephone, city, about, photograph} = req.body;

        const editTutorService = new EditTutorService();

        const tutor = await editTutorService.execute({ id, name, telephone, city, about, photograph });

        return res.json(tutor);
    }
}

export { EditTutorController }