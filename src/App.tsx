import { Button, Grid, GridItem, PlainToken, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Genre from "./schemas/genre.schema";
import PlatformSelector from "./components/PlatformSelector";
import Platform from "./schemas/platform.schema";
import { SortSelector } from "./components/SortSelector";
import Order from "./schemas/order.enum";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [order, setOrder] = useState<Order | null>(null);

  const resetState = () => {
    setSelectedGenre(null);
    setSelectedPlatform(null);
    setOrder(null);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" marginTop={2}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Button onClick={resetState}>Reset</Button>
          <PlatformSelector
            onSelectPlatform={setSelectedPlatform}
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
          <SortSelector order={order} onChangeOrder={setOrder}></SortSelector>
          <GameGrid
            platform={selectedPlatform}
            genre={selectedGenre}
            order={order}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
