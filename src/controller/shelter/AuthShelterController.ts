import { Request, Response } from "express";
import { AuthShelterService } from "../../services/shelter/AuthShelterService";

class AuthShelterController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const authShelterService = new AuthShelterService();

        const shelter = await authShelterService.execute({ name })

        return res.json(shelter)

    }
}

export { AuthShelterController }