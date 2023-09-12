import { test } from "bun:test";
import { getAllUsers } from "../dist";

test("Test", async () => {
  console.log(await getAllUsers());
});
