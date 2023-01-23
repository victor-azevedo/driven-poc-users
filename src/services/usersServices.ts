import { User, UserBody } from "protocols";
import { usersRepository } from "../repositories/users.Repository";

async function insertUser(user: UserBody): Promise<number> {
  const id: number = await usersRepository.insertUser(user);

  return id;
}

async function getUsers(bornAfter: Date): Promise<User[]> {
  if (bornAfter) {
    const usersList: User[] = await usersRepository.getUsersFilterDate(
      bornAfter
    );

    return usersList;
  }

  const usersList: User[] = await usersRepository.getUsers();

  return usersList;
}

async function getUserById(id: number): Promise<User> {
  const user: User = await usersRepository.getUserById(id);

  if (!user) {
    throw Error("Not Found");
  }

  return user;
}

async function deleteUserById(id: number): Promise<number> {
  const deleteCount: number = await usersRepository.deleteUserById(id);

  if (deleteCount === 0) {
    throw Error("Not Found");
  }

  return deleteCount;
}

async function updateUser(id: number, user: UserBody): Promise<void> {
  const updateCount: number = await usersRepository.updateUser(id, user);

  if (updateCount === 0) {
    throw Error("Not Found");
  }
}

export const usersServices = {
  insertUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUser,
};
