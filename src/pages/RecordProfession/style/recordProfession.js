import styled from "styled-components";

export const Row = styled.div`
display: flex;
flex-direction: row;
height: 300px;
padding: 0px;
`

export const Left = styled.div`
padding: 0 1rem;
display: flex;
flex-direction: column;
width: 70%;
`

export const Right = styled.div`
width: 30%;
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.backgroundSidebar};
box-shadow: ${({ theme }) => theme.cardShadow};
border-radius: 1rem;
`
export const LeftRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: ${props => props.justify ? props.justify : "flex-start"};
padding: .5rem;
gap: 0.5rem;
width: 100%;
height: ${props => props.height};
`

export const SlideContainer = styled.div`
width: 280px;
height: 300px;
`

export const EachFade = styled.div`
height: 270px;
width: 280px;
display: flex;
justify-content: center;
align-items: center;
`

export const ImageContainer = styled.div`
width: 280px;
height: 270px;
`

// export const InputFile = styled.div`
//   background-color: ${({ theme }) => theme.body};
//   border-radius: 10px;
//   position: relative;

//   label {
//     width: 100%;
//     height: 100%;
//   }

//   .image-slider {
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     bottom: -5px;
//     left: 0;
//     background-color: red;
//   }
// `;

export const Wrapper = styled.div`
  display: flex;
  /* width: 100%; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  
`;

export const Title = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  /* margin-bottom: 0.rem; */
  font-weight: ${({ weight }) => (weight ? "bold" : "")};
`;

export const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
font-size: 0.9rem;
font-weight: 700;
line-height: 1.5;
color: ${({ theme }) => theme.text};
margin-bottom: 0.4rem;
font-weight: ${({ weight }) => (weight ? "bold" : "")};
`;

export const InputField = styled.input`
  -webkit-appearance: none;
  border: 1px solid #c8cccf;
  border-radius: 5px;
  outline: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 0.5rem 0.5rem;

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
  }
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0.5rem 0 1.1rem;
  font-size: .9rem;
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  box-shadow: inset 4px 4px 15px -9px rgba(79, 79, 79, 0.25);
  border-radius: 10px;
`;
