import React, { useState } from "react";

// components
import Typography from "../Typography/Typography";

// styled components
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import { Card, Header, Row } from "./questionnaireStyle";
import QRCode from "react-qr-code";
import Button from "../Button/Button";
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
const QuestionnaireList = ({ items }) => {
  // const properties = {
  //   duration: 5000,
  //   transitionDuration: 500,
  //   infinite: true,
  //   indicators: true,
  //   arrows: true,
  //   pauseOnHover: true,
  //   onChange: (oldIndex, newIndex) => {
  //     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  //   },
  // };

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
            <Button color="#A6A6A6">در حال بررسی ...</Button>
          </Card>
        ))}
        {/* </Fade>
        </div> */}
      </CardListStyle>
    </Container>
  );
};
export default QuestionnaireList;
