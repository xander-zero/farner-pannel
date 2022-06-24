import React from "react";

// components
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

// styled componentss
import { Card, Header, Row } from "../QuestionnaireList/questionnaireStyle";
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import QRCode from "react-qr-code";

const VisitList = ({ items }) => {
  return (
    <Container>
      <HeaderTitle>بازدید</HeaderTitle>
      <CardListStyle>
        {items?.map((item, index) => (
          <Card key={index}>
            <Header>
              <Row>
                <img src={item.imgProduct} />
                <Typography size="14px" weight="bold">
                  {item?.nameProduct}
                </Typography>
              </Row>
              <Typography size="14px" weight="bold">
                {item?.data}
              </Typography>
            </Header>
            <Header>
              <Row>
                <Typography size="14px" weight="bold">
                  <QRCode value={item?.expertCode} size={100} height={100} />
                </Typography>
              </Row>
              <Typography size="14px" weight="bold">
                {item?.expertCode}
              </Typography>
            </Header>
            <Button color="#002060">مشاهده برنامه غذایی</Button>
          </Card>
        ))}
      </CardListStyle>
    </Container>
  );
};
export default VisitList;
