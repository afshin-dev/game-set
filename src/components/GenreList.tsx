import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres, loading } = useGenres();

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <List marginTop={10}>
        {genres.map((g) => {
          return (
            <ListItem key={g.id} marginY={2}>
              <HStack>
                <Image
                  src={g.image_background}
                  boxSize={14}
                  objectFit={"cover"}
                  borderRadius={8}
                ></Image>
                <Text>{g.name}</Text>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
