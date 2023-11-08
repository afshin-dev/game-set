import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={1}>
        <Image
          src={logo}
          boxSize="40px"
          bgColor={"transparent"}
          borderRadius={20}
        ></Image>
        <Text fontWeight="bold" fontFamily="monospace">
          Gem Set
        </Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
}
