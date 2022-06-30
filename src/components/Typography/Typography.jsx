import React from "react";
import { Title } from "./typographyStyle";

const Typography = ({ children, color, size, weight, textAlign, space }) => {
  return (
    <Title
      color={color}
      size={size}
      weight={weight}
      textAlign={textAlign}
      space={space}
    >
      {children}
    </Title>
  );
};

export default Typography;
