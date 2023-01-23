import connection from "../database";
import { QueryResult } from "pg";
import { UserBody } from "protocols";

async function insertUser(user: UserBody): Promise<number> {
  const { rows }: QueryResult = await connection.query(
    `INSERT INTO users ("name", "nickname", "birthday", "cpf", "email", "phone") VALUES
  ($1, $2, $3, $4, $5, $6) RETURNING id`,
    [user.name, user.nickname, user.birthday, user.cpf, user.email, user.phone]
  );

  return rows[0]?.id;
}

export const usersRepository = {
  insertUser,
};
