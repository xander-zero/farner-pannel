import styled from "styled-components";

export const InputFile = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  position: relative;

  label {
    width: 100%;
    height: 100%;
  }

  .image-slider {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -5px;
    left: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  /* width: 100%; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  width: 100px;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0.3rem 0.5rem;
  border-radius: 10px;
  /* align-items: center; */
  /* height: 100px; */
  svg {
    text-align: center !important;
    margin: 0 auto !important;
  }
`;

export const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const Label = styled.label`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;
`;
