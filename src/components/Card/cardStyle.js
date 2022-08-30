import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 346px;
  height: 170px;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => theme.cardShadow};
  margin: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;

  /* background: #EBEBEB; */
  border-radius: 30px;


  /* @media (max-width: 1500px) {
    width: 35%;
  }
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00a455;
  padding: 0.5rem;
  border-radius: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardRights = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding: 1rem; 
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  position: relative;
  /* background-color: red; */
  /* padding: 0.3rem; */
  /* background-color: ${({ theme }) => theme.body}; */
`;


export const Img = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 30px;
`;
