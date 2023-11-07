import Platform from "../schemas/platform.schema";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { GrStatusUnknown } from "react-icons/gr";

import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
interface PlatformIcons {
  pc: IconType;
  playstation: IconType;
  xbox: IconType;
  nintendo: IconType;
  ios: IconType;
  android: IconType;
  macos: IconType;
  linux: IconType;
  web: IconType;
  macintosh: IconType;
  unknown: IconType;
  getIcon: (name: string) => IconType;
}
const platformsIcons: PlatformIcons = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  ios: FaApple,
  android: FaAndroid,
  macos: FaApple,
  linux: FaLinux,
  web: BsGlobe,
  macintosh: FaApple,
  unknown: GrStatusUnknown,
  getIcon(name): IconType {
    for (let [k, v] of Object.entries(this)) {
      if (name.toLowerCase().includes(k)) {
        return v;
      }
    }
    return this.unknown;
  },
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      <HStack fontSize={"sm"} marginTop={2}>
        {platforms.map((p) => {
          return (
            <span key={p.id}>
              {" "}
              {<Icon as={platformsIcons.getIcon(p.name)}></Icon>}
            </span>
          );
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;
