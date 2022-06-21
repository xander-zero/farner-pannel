import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 250px;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00a455;
  padding: 0.5rem;
  border-radius: 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardRights = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1rem;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.body};
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
`;
