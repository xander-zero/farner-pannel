import styled from "styled-components";
import Typography from "../Typography/Typography";

const Alert = ({ children }) => {
  return (
    <AlertStyle>
      <Typography size="14px" weight="bold">
        {children}
      </Typography>
    </AlertStyle>
  );
};

const AlertStyle = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  width: 100%;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export default Alert;
