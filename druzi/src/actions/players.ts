import client from "../client";

type Player = {
  userId: number;
  boardId: number;
  isAdmin: boolean;
  nickname: string;
};

export async function getPlayersFromBoardId(
  boardId: number,
): Promise<Player[]> {
  const rs = await client.execute(
    `select * from players where boardId=${boardId}`,
  );
  return rs.rows as unknown as Player[];
}
