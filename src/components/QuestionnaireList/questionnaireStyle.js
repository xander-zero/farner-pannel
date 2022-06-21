import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  margin-top: 8rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 250px;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;
