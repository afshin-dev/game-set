import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
const PlatformSelector = () => {
  const { error, loading, loadMorePlatform, platforms } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((p) => {
          return <MenuItem key={p.id}>{p.name}</MenuItem>;
        })}
        <MenuList>
          <Button onClick={loadMorePlatform}>more</Button>
        </MenuList>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
