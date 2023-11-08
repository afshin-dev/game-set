import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
  onSearch: (k: string) => void;
  searchPhrase: string;
}
export default function NavBar(p: Props) {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={1}>
        <Image
          src={logo}
          boxSize="40px"
          bgColor={"transparent"}
          borderRadius={20}
        ></Image>
        <Search onSearch={p.onSearch} searchPhrase={p.searchPhrase}></Search>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
}
