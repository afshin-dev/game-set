import { Input, InputGroup } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

interface Props {
  onSearch: (k: string) => void;
  searchPhrase: string;
}
const Search = (p: Props) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          p.onSearch(searchRef.current.value);

          searchRef.current.value = "";
        }
      }}
    >
      <InputGroup>
        <Input
          borderRadius={20}
          placeholder={`Search for ${
            p.searchPhrase ? p.searchPhrase : "games"
          } ...`}
          variant={"filled"}
          ref={searchRef}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default Search;
