import { Button, Grid, GridItem, PlainToken, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import Genre from "./schemas/genre.schema";
import PlatformSelector from "./components/PlatformSelector";
import Platform from "./schemas/platform.schema";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const resetState = () => {
    setSelectedGenre(null);
    setSelectedPlatform(null);
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
          <GameGrid
            platform={selectedPlatform}
            genre={selectedGenre}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
