import styled from "styled-components";

export const CardListStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  /* background-color: red; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
