import { Request, Response } from "express";
import { UserBody } from "protocols";
import { usersServices } from "../services/usersServices";

export async function insertUser(req: Request, res: Response) {
  const user = req.body as UserBody;

  try {
    const id: number = await usersServices.insertUser(user);

    res.send({ id });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}
