import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

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
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
