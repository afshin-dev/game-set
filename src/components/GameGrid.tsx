import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Genre from "../schemas/genre.schema";

interface Props {
  genre: Genre | null;
}

const GameGrid = (p: Props) => {
  const { error, games, loading } = useGames({ genre: p.genre });

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{
          xl: 4,
          lg: 3,
          md: 2,
          sm: 1,
        }}
        spacing={10}
        padding={10}
      >
        {games.map((g) => {
          return <GameCard game={g} key={g.id}></GameCard>;
        })}
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
            return <GameCardSkeleton key={`${n}`}></GameCardSkeleton>;
          })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
