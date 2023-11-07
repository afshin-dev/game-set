import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <>
      <Badge colorScheme="green">{score}</Badge>
    </>
  );
};

export default CriticScore;
