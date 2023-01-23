import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { userSchema } from "../schema/usersSchema";
import { User } from "protocols";

export function userValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body as UserBody;

  const { error }: Joi.ValidationResult = userSchema.validate(body, {
    abortEarly: false,
  });

  if (error) {
    const message: string[] = error.details.map((detail) => detail.message);

    console.log("BAD_REQUEST:", message.join(", "));
    return res.status(422).send({ message: message.join(", ") });
  }

  next();
}

type UserBody = Omit<User, "id">;
