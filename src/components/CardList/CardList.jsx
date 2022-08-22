import React from "react";

// components
import Card from "../Card/Card";

// styled components
import { CardListStyle } from "./CardListStyle";

const CardList = ({ items, icon, expertCode }) => {  
  return (
    <CardListStyle>
      {items?.map((item, index) => (
        <Card icon={icon} key={index} item={item} expertCode={expertCode} />
      ))}
    </CardListStyle>
  );
};

export default CardList;
