import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();

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
