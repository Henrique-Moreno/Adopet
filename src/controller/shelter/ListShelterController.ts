import { Request, Response } from "express";
import { ListShelterService } from "../../services/shelter/ListShelterService";

class ListShelterController {
    async handle(req: Request, res: Response) {

        const listShelterService = new ListShelterService();

        const shelter = await listShelterService.execute();

        return res.json(shelter);
    }
}

export { ListShelterController }