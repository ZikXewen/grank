import client from "../client";

type User = {
  UserId: number;
  DefaultName: string;
};

export async function getAllUsers(): Promise<User[]> {
  const rs = await client.execute("select * from users");
  return rs.rows as unknown as User[];
}
