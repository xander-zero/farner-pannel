import styled from "styled-components";

export const SelectStyle = styled.select`
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  outline: none;
  margin-top: 0.6rem;
  font-family: "IRAN";
  width: 100%;
  border-radius: 5px;
  margin-bottom: -4px;
  margin-right: 5px;

  @media (max-width: 768px) {
    margin: 0.3rem;
  }
`;

export const Option = styled.option``;
