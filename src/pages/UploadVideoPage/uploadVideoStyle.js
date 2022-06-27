import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 2rem 1rem;
  border-radius: 10px;
  .select {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0 0;
`;
