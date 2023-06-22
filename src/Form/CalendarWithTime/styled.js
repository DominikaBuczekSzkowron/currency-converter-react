import styled from "styled-components";

export const Date = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.8em;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;
