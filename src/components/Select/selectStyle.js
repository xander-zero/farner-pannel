import styled from "styled-components";

export const SelectStyle = styled.select`
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 0.4rem;
  background-color: transparent;
  outline: none;
  margin-top: 0.6rem;
  font-family: "IRAN";
  width: 100%;
`;

export const Option = styled.option``;
