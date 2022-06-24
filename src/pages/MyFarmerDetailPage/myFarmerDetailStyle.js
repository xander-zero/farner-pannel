import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  flex-direction: column;
`;

export const HeaderImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Img = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 20px;
  margin-left: 10px;
`;

export const HeadeTitle = styled.div`
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
