import styled from "styled-components";

export const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
export const Left = styled.div`
  display: flex;
  width: 70%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-radius: 10px;
  margin: 0.5rem 0;
`;
