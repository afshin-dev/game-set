import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiChevronsRight } from "react-icons/fi";
import Order from "../schemas/order.enum";
interface Props {
  onChangeOrder: (o: Order) => void;
  order: Order | null;
}
const oderMap = {
  newest: Order.releasedD,
  oldest: Order.releasedA,
  atoz: Order.nameA,
  ztoa: Order.nameD,
  most_rated: Order.ratingD,
  underrated_first: Order.ratingA,
  metacritic_hero: Order.metacriticD,
  metacritic_hated: Order.metacriticA,
};
export const SortSelector = (p: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronsRight />}>
        Sort
      </MenuButton>
      <MenuList>
        {Object.entries(oderMap).map((o) => {
          return (
            <MenuItem onClick={() => p.onChangeOrder(o[1])} key={o[0]}>
              {o[0]}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
