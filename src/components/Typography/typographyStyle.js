import styled from "styled-components";

export const Title = styled.p`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => (size ? size : "14px")};
  margin: 0px;
`;
