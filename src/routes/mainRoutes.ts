import { Router } from "express";
import { Request, Response } from "express";

export const mainRouter = Router();

mainRouter.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});
