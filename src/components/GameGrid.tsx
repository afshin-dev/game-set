import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, loading } = useGames();

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
            return <GameCardSkeleton></GameCardSkeleton>;
          })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
