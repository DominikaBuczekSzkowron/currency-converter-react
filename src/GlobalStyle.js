import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}
`;

export const Container = styled.div`
  background-image: url("${background}");
  background-size: contain;
  font-family: "Source Sans 3", sans-serif;
  max-width: 1000px;
  margin: 5px auto;
  color: ${({ theme }) => theme.colors.primaryColor};
`;
