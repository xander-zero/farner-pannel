import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin: 1rem; */
  width: 100%;
  margin: 1rem;
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
  width: 30%;
  background-color: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => theme.farmerDataCardShadow};
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    /* border-radius: 50px; */
    object-fit: cover;
    margin-left: 1rem;
  }
`;
