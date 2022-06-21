import React from "react";
import { Title } from "./typographyStyle";

const Typography = ({ children, color, size, weight }) => {
  return (
    <Title color={color} size={size} weight={weight}>
      {children}
    </Title>
  );
};

export default Typography;
