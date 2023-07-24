import { useEffect, useState } from "react";
import { User } from "src/types/player";
import { generateRandomUsers } from "../utils/randomValuesGenerator";

export const useAddNewPlayer = (page: number) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [players, setPlayers] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const newPlayers = generateRandomUsers(50);
      setPlayers((prev) => {
        return [...prev, ...newPlayers];
      });
      setLoading(false);
    }, 1000);
  }, [page]);

  return { isLoading, players };
};
