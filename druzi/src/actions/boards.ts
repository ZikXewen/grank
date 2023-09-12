import client from "../client";

type Board = {
  boardId: number;
  isRealTime: boolean;
  ownerId: number;
};

export async function getBoardsFromUserId(userId: number): Promise<Board[]> {
  const rs = await client.execute(
    `select * from boards where ownerId=${userId}`,
  );
  return rs.rows as unknown as Board[];
}
