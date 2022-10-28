import React from "react";
import styled from "styled-components";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function SearchBar() {
  return (
    <>
      <Search type="text" placeholder="search for a city..." />
      <SearchButton size={25} />
      <LocationButton size={25} />
    </>
  );
}

const Search = styled.input`
  margin: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.3rem;
  border-radius: 5px;
  font-weight: 300;
  padding: 0.2rem;
  box-shadow: 0 20px 25px -5px #52525b, 0 8px 10px -6px #52525b;
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled(UilSearch)`
  color: white;
  cursor: pointer;
`;

const LocationButton = styled(UilLocationPoint)`
  color: white;
  cursor: pointer;
  margin-left: 0.8rem;
`;

export default SearchBar;
