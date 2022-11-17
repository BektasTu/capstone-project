import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const links = [
  { name: "home", path: "/" },
  { name: "activities", path: "/activities" },
  { name: "add activity", path: "/createActivities" },
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
    font-size: 1rem;
    position: relative;
    padding: 1rem;
    list-style: none;
    text-transform: uppercase;
    font-family: verdana;
    &:hover,
    &:focus {
      color: palevioletred;
    }
    &:active {
      color: red;
    }
  }
`;
export default Navbar;
