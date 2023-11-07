import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import type Game from "../schemas/game.schema";
import PlatformIconList from "./PlatformIconList";
import Platform from "../schemas/platform.schema";
import CriticScore from "./CriticScore";

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
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms_to_platform_array(
                game.parent_platforms
              )}
            ></PlatformIconList>
            <CriticScore score={game.metacritic!}></CriticScore>
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
