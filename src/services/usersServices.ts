import { UserBody } from "protocols";
import { usersRepository } from "../repositories/users.Repository";

async function insertUser(user: UserBody): Promise<number> {
  const id: number = await usersRepository.insertUser(user);

  return id;
}

export const usersServices = {
  insertUser,
};
