import { useState } from "react";
import styled from "styled-components";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchBar({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <>
      <Search
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text"
        placeholder="search for a city..."
      />
      <SearchButton size={25} onClick={handleSearchClick} />
      <LocationButton size={25} onClick={handleLocationClick} />
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
const SearchButton = styled(IoSearchSharp)`
  color: white;
  cursor: pointer;
  margin-bottom: -0.4rem;
`;

const LocationButton = styled(IoLocationSharp)`
  color: white;
  cursor: pointer;
  margin: -0.4rem 0.8rem;
`;

export default SearchBar;
