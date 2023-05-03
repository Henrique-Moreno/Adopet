import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function shelterAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    console.log("Chamou nois")
}