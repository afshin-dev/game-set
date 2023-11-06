import { useEffect, useState } from "react";
import api from "../services/rawg-api-client";
import type Game from "../schemas/game.schema";

type GamesResponse = {
  results: Game[];
  count: number;
  next?: string;
  previous?: string;
};

const useGames = (): { games: Game[]; error: string } => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<GamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((e) => {
        setError(e?.message ?? "error occured");
      });
  }, []);

  return {
    games: games,
    error: error,
  };
};

export default useGames;
