import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import Genre from "../schemas/genre.schema";
interface Props {
  onSelectGenre: (g: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
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
                <Button
                  variant={"link"}
                  onClick={() => onSelectGenre({ ...g })}
                >
                  {g.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
