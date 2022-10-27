import React from "react";
import styled from "styled-components";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function SearchBar() {
  return (
    <>
      <Search type="text" placeholder="search for a city..." />
      <UilSearch size={25} />
      <UilLocationPoint size={25} />
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

export default SearchBar;
