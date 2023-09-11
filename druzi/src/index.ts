import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

await client.execute(
  "create table if not exists users(userId integer primary key autoincrement, defaultName varchar(32))",
);

export const getAllUsers = async () =>
  await client.execute("select * from users");
