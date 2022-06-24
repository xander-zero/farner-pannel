import styled from "styled-components";

export const Upload = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem auto;
`;

export const Img = styled.img`
  /* border-radius: 50%; */
  border: 2px solid #00b4ff;
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const Round = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #00b4ff;
  width: 32px;
  height: 32px;
  line-height: 33px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputFile = styled.input`
  position: absolute;
  transform: scale(2);
  opacity: 0;

  ::-webkit-file-upload-button {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-radius: 10px;
  padding: 1rem;
  /* margin: 0 0.5rem; */
`;
export const Right = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-radius: 10px;
  padding: 1rem;
  margin: 0 0.5rem;
`;
