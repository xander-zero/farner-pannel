import styled from "styled-components";

export const InfoStyle = styled.div`
  margin-top: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-radius: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const InputFile = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  margin-left: 1rem;
  position: relative;

  .image-slider {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -5px;
    left: 0;
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

export const FormGroup = styled.div`
  margin-top: 0.5rem;
`;

export const Title = styled.label`
  font-size: 0.9rem;
  font-weight: 400;

  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
  font-weight: ${({ weight }) => (weight ? "bold" : "")};
`;
