// styled components
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
 body {
    background: ${({ theme }) => theme.containerBackground};
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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem;
  align-items: flex-start;
  width: 100%;
`;

export const FarmerDataRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 20px;
  margin: 1rem 0;
`
export const HeaderFarmerDataRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow:  ${({ theme }) => theme.bottomCardShadow};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`

export const BodyFarmerDataRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`

export const State = styled.div`
  width: 100%;
  background-color: #277BC0;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  p{
    color: #fff;
  }
`

export const SeeMore = styled.div`
    cursor: pointer;
`



export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h4`
  font-size: 20px;
  font-weight: bold !important;
  color: ${({ theme }) => theme.text};
`;
