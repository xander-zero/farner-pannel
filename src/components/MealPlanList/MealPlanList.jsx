import React from "react";

// components
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

// styled componentss
import { Card, Footer, Header } from "../QuestionnaireList/questionnaireStyle";
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";

const MealPlanList = ({ items }) => {
  return (
    <Container>
      <HeaderTitle>برنامه غذایی</HeaderTitle>
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
            <Typography>{item.Qcode}</Typography>
            <Footer>
              <Button marginTop="0rem" small color="#00B050">
                در حال بررسی
              </Button>
            </Footer>
          </Card>
        ))}
      </CardListStyle>
    </Container>
  );
};
export default MealPlanList;
