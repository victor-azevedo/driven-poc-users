import connection from "../database";
import { QueryResult } from "pg";
import { User, UserBody } from "protocols";

async function insertUser(user: UserBody): Promise<number> {
  const { rows }: QueryResult = await connection.query(
    `INSERT INTO users ("name", "nickname", "birthday", "cpf", "email", "phone") VALUES
  ($1, $2, $3, $4, $5, $6) RETURNING id`,
    [user.name, user.nickname, user.birthday, user.cpf, user.email, user.phone]
  );

  return rows[0]?.id;
}

async function getUsers(): Promise<User[]> {
  const { rows }: QueryResult = await connection.query(
    `SELECT "id", "name", "nickname", "birthday"::text, "cpf", "email", "phone"
      FROM users`,
    []
  );

  return rows;
}

async function getUserById(id: number): Promise<User> {
  const { rows }: QueryResult = await connection.query(
    `SELECT "id", "name", "nickname", "birthday"::text, "cpf", "email", "phone"
      FROM users
      WHERE id = $1`,
    [id]
  );

  return rows[0];
}

async function getUsersFilterDate(bornAfter: Date): Promise<User[]> {
  const { rows }: QueryResult = await connection.query(
    `SELECT "id", "name", "nickname", "birthday"::text, "cpf", "email", "phone"
      FROM users
      WHERE birthday >= $1`,
    [bornAfter]
  );

  return rows;
}

async function deleteUserById(id: number): Promise<number> {
  const { rowCount }: QueryResult = await connection.query(
    `DELETE FROM users
      WHERE id = $1`,
    [id]
  );

  return rowCount;
}

async function updateUser(id: number, user: UserBody): Promise<number> {
  const { rowCount }: QueryResult = await connection.query(
    `UPDATE users 
     SET "name"=$1, "nickname"=$2, "birthday"=$3, "cpf"=$4, "email"=$5, "phone"=$6
      WHERE id = $7`,
    [
      user.name,
      user.nickname,
      user.birthday,
      user.cpf,
      user.email,
      user.phone,
      id,
    ]
  );

  return rowCount;
}

export const usersRepository = {
  insertUser,
  getUsers,
  getUserById,
  getUsersFilterDate,
  deleteUserById,
  updateUser,
};
