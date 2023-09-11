import { expect, test } from "bun:test";
import { z } from "zod";

test("environment variables", () => {
  const env = z.object({
    TURSO_URL: z.string().url(),
    TURSO_TOKEN: z.string().min(1),
  });
  expect(() => env.parse(process.env)).not.toThrow();
});
