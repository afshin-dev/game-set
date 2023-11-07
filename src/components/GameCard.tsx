import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import type Game from "../schemas/game.schema";
import PlatformIconList from "./PlatformIconList";
import Platform from "../schemas/platform.schema";

interface Props {
  game: Game;
  children?: React.ReactNode;
}

const GameCard = ({ game }: Props) => {
  game.parent_platforms_to_platform_array = (
    pp: {
      platform: Platform;
    }[]
  ): Platform[] => {
    return pp.map((o) => o.platform);
  };
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <PlatformIconList
            platforms={game.parent_platforms_to_platform_array(
              game.parent_platforms
            )}
          ></PlatformIconList>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
