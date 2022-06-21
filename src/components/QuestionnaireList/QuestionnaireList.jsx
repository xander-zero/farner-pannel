import React, { useState } from "react";

// components
import Typography from "../Typography/Typography";

// styled components
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import { CardStyle } from "../Card/cardStyle";
import { Card, Footer, Header } from "./questionnaireStyle";
const QuestionnaireList = ({ items }) => {
  return (
    <Container>
      <HeaderTitle>پرسشنامه</HeaderTitle>
      <CardListStyle>
        {items?.map((item, index) => (
          <Card key={index}>
            <Header>
              <Typography size="14px" weight="bold">
                پسته
              </Typography>
              <Typography size="14px" weight="bold">
                1400/2/1
              </Typography>
            </Header>
            <Typography>{item}</Typography>
            <Footer>
              <Typography>در حال بررسی</Typography>
            </Footer>
          </Card>
        ))}
      </CardListStyle>
    </Container>
  );
};
export default QuestionnaireList;
