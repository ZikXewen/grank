import { createClient } from "@libsql/client/web";
// note: https://github.com/libsql/libsql-client-ts/pull/71

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

await client.execute(
  "create table if not exists users(userId integer primary key autoincrement, defaultName varchar(32))",
);

export default client;
