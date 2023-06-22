import styled from "styled-components";

export const OnForm = styled.form`
  max-width: 600px;
  margin: 5px auto;
  margin-top: 20px;
  background-repeat: round;
  border-radius: 5px;
  padding: 15px;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  padding: 20px;
  border-radius: 5px;
  margin: 15px;
`;

export const Legend = styled.legend`
  width: 90%;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  margin-bottom: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  padding: 5px;
  border-radius: 5px;

  &:hover {
    border: 1px solid hsl(240, 67%, 40%);
    cursor: pointer;
  }
`;

export const Note = styled.p`
  font-size: 0.85em;
`;

export const Result = styled.p`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;
