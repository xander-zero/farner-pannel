import React from "react";
import { Title } from "./typographyStyle";

const Typography = ({ children, color, size, weight, textAlign, onClick }) => {
  return (
    <Title color={color} size={size} weight={weight} textAlign={textAlign}>
      {children}
    </Title>
  );
};

export default Typography;
