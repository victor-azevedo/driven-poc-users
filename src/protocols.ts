export type User = {
  id: number;
  name: string;
  nickname: string;
  birthday: Date;
  cpf: string;
  email: string;
  phone: string;
};

export type UserBody = Omit<User, "id">;
