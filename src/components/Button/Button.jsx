import React from "react";
import styled from "styled-components";

const Button = ({
  type,
  children,
  small,
  onClick,
  color,
  space,
  marginTop,
}) => {
  return (
    <ButtonStyle
      marginTop={marginTop}
      type={type}
      onClick={onClick}
      small={small}
      color={color}
      space={space}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${({ small }) => (small ? ".7rem" : "1rem")};
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #fff;
  background-color: ${({ color }) => (color ? color : "#6980ff")};
  font-family: "IRAN";
  width: ${({ small }) => (small ? "130px" : "150px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "1rem")};
  margin-right: ${({ space }) => (space ? ".5rem" : "0")};
`;
export default Button;
