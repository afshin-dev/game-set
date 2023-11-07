import { useEffect, useState } from "react";
import api from "../services/rawg-api-client";
import type Game from "../schemas/game.schema";

type GamesResponse = {
  results: Game[];
  count: number;
  next?: string;
  previous?: string;
};

const useGames = (): { games: Game[]; error: string; loading: Boolean } => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<GamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);

        setLoading(false);
      })
      .catch((e) => {
        setError(e?.message ?? "error occured");

        setLoading(false);
      });
  }, []);

  return {
    games: games,
    error: error,
    loading: loading,
  };
};

export default useGames;
