import { createClient } from "@libsql/client/web";
// note: https://github.com/libsql/libsql-client-ts/pull/71

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

await client.batch([
  "create table if not exists users (userId integer primary key, defaultName varchar(32))",
  "create table if not exists boards (boardId integer primary key autoincrement, isRealTime boolean, ownerId integer)",
  "create table if not exists players (userId integer, boardId integer, isAdmin boolean, nickname varchar(32), primary key (userId, boardId))",
]);

export default client;
