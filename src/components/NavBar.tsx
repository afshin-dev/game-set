import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" bgColor={"black"}></Image>
        <Text fontWeight="bold" fontFamily="monospace">
          Gem Set
        </Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
}
