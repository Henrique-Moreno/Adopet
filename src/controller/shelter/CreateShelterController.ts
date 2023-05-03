import { Request, Response } from "express";
import { CreateShelterService } from "../../services/shelter/CreateShelterService";

class CreateShelterController {
    async handle(req: Request, res: Response) {

        const { name } = req.body;

        const createShelterService = new CreateShelterService();

        const shelter = await createShelterService.execute({ name });

        return res.json(shelter);
    }
}

export { CreateShelterController }