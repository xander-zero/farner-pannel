import styled from "styled-components";

export const TextAreaStyle = styled.div`
  display: flex;
  position: relative;
  width: ${width => width ? width : "158px"}; 
  height: 68px;
  border-radius: 10px;
  margin-top: 0.7rem;

  svg {
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;


export const Text = styled.textarea`
  -webkit-appearance: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  /* background-color: ${({ theme }) => theme.backgroundSidebar}; */
  /* height: ${({ small }) => (small ? "50px" : "calc(2.25rem + 2px)")}; */
  padding: 0.5rem 0.5rem 0 1.1rem;
  font-family: "IRAN";
  font-size: 10px;
  /* height: ${({ small }) => (small ? "60px" : "150px")}; */

  position: absolute;
  top: 0;
  width: ${width => width ? width : "158px"};
  height: 68px;
  background: #F2F2F2;
  box-shadow: inset 4px 4px 15px -9px rgba(79, 79, 79, 0.25);
  border-radius: 10px;
  &::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  /* padding: 0.5rem 0; */
    

  }
`;
export const Label = styled.label`
  font-size: 0.4rem;
  line-height: 1.5;
  /* color: ${({ theme }) => theme.text}; */
  margin-bottom: 0.4rem;
  color: red;
`;
