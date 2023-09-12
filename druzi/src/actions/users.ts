import client from "../client";

type User = {
  userId: string;
  defaultName: string;
  expireAt: number;
};

export async function getAllUsers(): Promise<User[]> {
  const rs = await client.execute("select * from users");
  return rs.rows as unknown as User[];
}

export async function getUserByUserId(userId: string): Promise<User> {
  const rs = await client.execute(`select * from users where userId=${userId}`);
  if (rs.rows.length === 0) throw new Error("User not found.");
  return rs.rows[0] as unknown as User;
}

export async function createUser(
  userId: string,
  defaultName: string,
): Promise<User> {
  const rs = await client.execute(
    `insert into users values (${userId}, ${defaultName}, 0`,
  );
  if (rs.rowsAffected !== 1) throw new Error("Failed to create user.");
  return { userId, defaultName, expireAt: 0 };
}
