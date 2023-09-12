import client from "../client";

type User = {
  userId: number;
  defaultName: string;
};

export async function getAllUsers(): Promise<User[]> {
  const rs = await client.execute("select * from users");
  return rs.rows as unknown as User[];
}

export async function getOrCreateUser(
  userId: number,
  defaultName?: string,
): Promise<User> {
  const rs = await client.execute(`select * from users where userId=${userId}`);
  if (rs.rows.length > 0) return rs.rows[0] as unknown as User;
  if (!defaultName)
    throw new Error("Could not create user. Default name not specified.");
  await client.execute(`insert into users values (${userId}, ${defaultName})`);
  return { userId, defaultName };
}
