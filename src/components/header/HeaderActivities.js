import React from "react";
import styled from "styled-components";

function HeaderActivities() {
  return <StyledHeader>Your Activities</StyledHeader>;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export default HeaderActivities;
