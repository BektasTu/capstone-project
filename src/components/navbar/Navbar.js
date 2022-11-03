import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <NavbarPosition>
        <Home>Home</Home>
        <Planer>Planer</Planer>
        <ADD>New Activity</ADD>
      </NavbarPosition>
    </>
  );
}
const NavbarPosition = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  border-radius: 5px;
`;
const Home = styled.button`
  font-size: 0.6em;
  padding: 1.5em 0.5em;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const Planer = styled.button`
  font-size: 0.6em;
  padding: 1.5em 0.5em;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const ADD = styled.button`
  font-size: 0.6em;
  padding: 1.5em 0.5em;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
export default Navbar;
