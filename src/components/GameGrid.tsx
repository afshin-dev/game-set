import { useEffect, useState } from "react";
import api from "../services/rawg-api-client";
import type Game from "../schemas/game.schema";

type GamesResponse = {
  results: Game[];
  count: number;
  next?: string;
  previous?: string;
};

const GameGrid = () => {
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

  return (
    <>
      {error && <p>{error}</p>}
      <div>
        {games.map((g) => {
          return <p key={g.id}>{g.name}</p>;
        })}
      </div>
    </>
  );
};

export default GameGrid;
