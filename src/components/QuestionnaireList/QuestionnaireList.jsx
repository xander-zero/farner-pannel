import React, { useState } from "react";

// components
import Typography from "../Typography/Typography";

// styled components
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import { Card, Header, Row } from "./questionnaireStyle";
import Button from "../Button/Button";
import imgProduct from "../../assets/images/plant.png";
import { formatData } from "../../utils/date";
import QRCode from "../../assets/images/qr-code.png";
// import QRCode from "react-qr-code";

const QuestionnaireList = ({ items }) => {
  return (
    <Container>
      <HeaderTitle>پرسشنامه</HeaderTitle>
      <CardListStyle>
        {/* <div style={{ width: "100%" }}>
          <Fade scale={0.4}> */}
        {items?.map((item, index) => (
          <Card key={index}>
            <Header>
              <Row>
                <img src={imgProduct} />
                <Typography size="14px" weight="bold">
                  {item?.product}
                </Typography>
              </Row>
              <Typography size="14px" weight="bold">
                تاریخ دریافت : {formatData(item?.date?.toString())}
              </Typography>
            </Header>
            <Header>
              <Typography size="14px" weight="bold">
                {item?.Qcode}
              </Typography>
              <Row>
                <Typography size="14px" weight="bold">
                  {/* <QRCode value={item?.Qcode} size={100} height={100} /> */}
                  <img src={QRCode} alt="QRCode-image" />
                </Typography>
              </Row>
            </Header>
            <Button size="14px" color="#50CD89">
              {item.state === "supportCheck"
                ? "درحال بررسی "
                : item.state === "mealPlanCheck"
                ? "درحال نگارش"
                : ""
                ? item.state === "educationCheck" || item.state === "saleCheck"
                : " کنترل و تایید"
                ? item.state === "done"
                : "ارسال شد"}
            </Button>
          </Card>
        ))}
        {/* </Fade>
        </div> */}
      </CardListStyle>
    </Container>
  );
};
export default QuestionnaireList;
