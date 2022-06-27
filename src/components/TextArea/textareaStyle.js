import styled from "styled-components";

export const TextAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem 0;
`;

export const Text = styled.textarea`
  -webkit-appearance: none;
  border: 1px solid #c8cccf;
  border-radius: 5px;
  outline: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundSidebar};
  height: calc(2.25rem + 2px);
  padding: 0 0.5rem;
  font-family: "IRAN";
  height: 150px;
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
  font-weight: bold;
`;
