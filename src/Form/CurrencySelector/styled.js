import styled from "styled-components";

export const OnSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  padding: 5px;
  min-width: 230px;
  border-radius: 5px;
`;
