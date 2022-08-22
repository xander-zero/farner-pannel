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
  weight,
  size,
}) => {
  return (
    <ButtonStyle
      marginTop={marginTop}
      type={type}
      onClick={onClick}
      small={small}
      color={color}
      space={space}
      weight={weight}
      size={size}
    >
      {children}
    </ButtonStyle> 
  );
};

const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${({ size }) => (size ? size : "1rem")};
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #fff;
  background: linear-gradient(90deg, rgb(25, 56, 95) 0%, rgb(0, 90, 200) 100%);
  font-family: "IRAN";
  width: ${({ small }) => (small ? "130px" : "100%")};
  outline: none;
  border: none;
  cursor: pointer;
  /* margin-top: ${({ marginTop }) => (marginTop ? marginTop : "1rem")}; */
  /* margin-right: ${({ space }) => (space ? ".5rem" : "0")}; */
  font-weight: ${({ weight }) => weight};

  a {
    display: flex;
    justify-content: center;
    color: #fff;
  }
`;
export default Button;
