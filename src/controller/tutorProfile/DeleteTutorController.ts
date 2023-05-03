import { Request, Response } from "express";
import { DeleteTutorSerivice } from "../../services/tutorProfile/DeleteTutorSerivice";

class DeleteTutorController {
    async handle(req: Request, res: Response) {

        const id = req.query.id as string;

        const deleteTutorSerivice = new DeleteTutorSerivice();

        const tutor = await deleteTutorSerivice.execute({
            id
        })

        return res.json(tutor);
    }
}

export { DeleteTutorController }