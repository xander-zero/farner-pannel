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
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: ${({ size }) => (size ? size : "1rem")};
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #fff;
  background: ${({ color }) => (color ? color : "linear-gradient(90deg, rgb(25, 56, 95) 0%, rgb(0, 90, 200) 100%)")};
  width: ${({ small }) => (small ? "130px" : "100%")};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: ${({ weight }) => weight};
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
export default Button;
