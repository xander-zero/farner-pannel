import styled from "styled-components";

export const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
`;
export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: "wrap";
  width: 100%;
  margin-top: 1.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
// export const Left = styled.div`
//   display: flex;
//   width: 70%;
// `;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 1rem; */
  box-shadow: ${({ theme }) => theme.cardShadow};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px; 
  margin: 0.5rem 0;
  width: 30%;
  height: 160px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
`
