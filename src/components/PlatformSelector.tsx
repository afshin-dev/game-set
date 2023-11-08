import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../schemas/platform.schema";

interface Props {
  onSelectPlatform: (p: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = (props: Props) => {
  const { error, loading, loadMorePlatform, platforms } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {props?.selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((p) => {
          return (
            <MenuItem
              fontWeight={
                props.selectedPlatform?.id === p.id ? "bold" : "normal"
              }
              onClick={() => props.onSelectPlatform(p)}
              key={p.id}
            >
              {p.name}
            </MenuItem>
          );
        })}
        <MenuItem>
          <Button onClick={loadMorePlatform}>more</Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
