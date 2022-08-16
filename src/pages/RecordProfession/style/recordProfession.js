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
