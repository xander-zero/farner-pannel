// styled components
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
 body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    box-sizing:border-box;
    direction:rtl;
  }
  p{
    margin:0
  }
   a{
      text-decoration:none;
  }

  ul{
      list-style:none
  }
  .active {

  background-color: ${({ theme }) => theme.body};
  transition: 0.4s ease-in-out;
  width: 100%;
  border-right: 5px solid #005ac8;
}


`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  /* padding: 1rem; */
  margin: 1rem 0.5rem;
  position: relative;
  /* gap: 2rem; */
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blue; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h4`
  font-size: 20px;
  font-weight: bold !important;
  color: ${({ theme }) => theme.text};
`;
