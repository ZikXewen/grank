import { getUserByUserId } from "@grank/druzi";

Bun.serve({
  async fetch(req, server) {
    const cookies = req.headers.get("Cookie");
    if (!cookies?.startsWith("userId="))
      return new Response("Unauthorized", { status: 401 });
    const userId = cookies.split("=")[1];
    try {
      const user = await getUserByUserId(userId);
      if (user.expireAt < Date.now())
        return new Response("Forbidden", { status: 403 });
    } catch {
      return new Response("Unauthorized", { status: 401 });
    }
    return server.upgrade(req)
      ? undefined
      : new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    async message(ws, msg) { },
  },
});
