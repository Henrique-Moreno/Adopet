import { Request, Response } from "express";
import { SeekShelterService } from "../../services/shelter/SeekShelterService";

class SeekShelterController {
    async handle(req: Request, res: Response) {
        const seekShelterService = new SeekShelterService();

        const shelter = await seekShelterService.execute();

        return res.json(shelter);
    }
}

export { SeekShelterController }