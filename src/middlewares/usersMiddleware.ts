import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { userSchema, userParamsQuerySchema } from "../schema/usersSchema";
import { User, UserBody } from "protocols";

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

export function userQueryValidation(
  req: queryRequest,
  res: Response,
  next: NextFunction
) {
  const { bornAfter } = req.query as unknown as QueryBornAfter;

  const { error }: Joi.ValidationResult = userParamsQuerySchema.validate(
    { bornAfter },
    {
      abortEarly: false,
    }
  );

  req.bornAfter = bornAfter as unknown as Date;

  if (error) {
    const message: string[] = error.details.map((detail) => detail.message);

    console.log("BAD_REQUEST:", message.join(", "));
    return res.status(422).send({ message: message.join(", ") });
  }

  next();
}

type QueryBornAfter = { bornAfter: Date };
export type queryRequest = Request & { bornAfter: Date };
