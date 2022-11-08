import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const links = [
  { name: "home", path: "/" },
  { name: "planer", path: "/planer" },
  { name: "add", path: "/add" },
];

function Navbar() {
  return (
    <NavbarList>
      {links.map((link, index) => (
        <NavLink key={index} to={link.path}>
          <li>{link.name}</li>
        </NavLink>
      ))}
    </NavbarList>
  );
}
const NavbarList = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #3b4a5c;
  justify-content: space-around;
  border-top: solid 0.5px white;
  a {
    text-decoration: none;
  }

  li {
    color: #f8f8ff;
    font-size: 1.8rem;
    position: relative;
    list-style: none;
    text-transform: uppercase;
    font-family: verdana;
    text-shadow: -1px -1px 1px #efede3, 0px 1px 0 #2e2e2e, 0px 2px 0 #2c2c2c,
      0px 3px 0 #2a2a2a, 0px 4px 0 #282828, 0px 5px 0 #262626, 0px 6px 0 #242424,
      0px 7px 0 #222, 0px 8px 0 #202020, 0px 9px 0 #1e1e1e, 0px 10px 0 #1c1c1c,
      0px 11px 0 #1a1a1a, 0px 12px 0 #181818, 0px 13px 0 #161616,
      0px 14px 0 #141414, 0px 15px 0 #121212, 2px 20px 5px rgba(0, 0, 0, 0.9),
      5px 23px 5px rgba(0, 0, 0, 0.3), 8px 27px 8px rgba(0, 0, 0, 0.5),
      8px 28px 35px rgba(0, 0, 0, 0.9);
  }
`;
export default Navbar;
