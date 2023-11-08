import { useEffect, useState } from "react";
import api from "../services/rawg-api-client";
import type Game from "../schemas/game.schema";
import Genre from "../schemas/genre.schema";
import Platform from "../schemas/platform.schema";

type GamesResponse = {
  results: Game[];
  count: number;
  next?: string;
  previous?: string;
};
interface Args {
  genre: Genre | null;
  platform: Platform | null;
}

const useGames = (
  args: Args
): { games: Game[]; error: string; loading: Boolean } => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    let params: { [k: string]: string } = {};
    setLoading(true);

    // for filtering based on genres
    if (args.genre) {
      params.genres = args.genre.slug;
    }

    // for filtering based on platforms
    if (args.platform) {
      params.platforms = args.platform.id.toString();
    }

    api
      .get<GamesResponse>("/games", {
        params: params,
      })
      .then((res) => {
        setGames(res.data.results);

        setLoading(false);
      })
      .catch((e) => {
        setError(e?.message ?? "error occured");

        setLoading(false);
      });
  }, [args.genre, args.platform]);

  return {
    games: games,
    error: error,
    loading: loading,
  };
};

export default useGames;
