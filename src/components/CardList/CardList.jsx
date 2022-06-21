import React from "react";

// components
import Card from "../Card/Card";

// styled components
import { CardListStyle } from "./CardListStyle";

const CardList = ({ items }) => {
  return (
    <CardListStyle>
      {items?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </CardListStyle>
  );
};

export default CardList;
