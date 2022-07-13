import React from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

// styled componentss
import { Card, Header, Row } from "../QuestionnaireList/questionnaireStyle";
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import QRCode from "react-qr-code";
import { getVisit } from "../../redux/action/farmer";
import styled from "styled-components";
import Alert from "../Alert/Alert";

const VisitList = ({ items, visitCount }) => {
  const checkState = (state) => {
    switch (state) {
      case "dataCheck":
      case "GIS":
        return "در حال بررسی";
      case "analysCheck":
        return "در حال نگارش";
      case "educationCheck":
      case "saleCheck":
        return "کنترل و تایید";
      case "done":
        return "ارسال شد";
      default:
        return state;
    }
  };

  const dispatch = useDispatch();

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { visits } = farmerSelector;

  const getMoreVisit = (farmerCode) => {
    dispatch(getVisit(farmerCode));
  };

  return (
    <Container>
      <HeaderTitle>بازدید</HeaderTitle>
      <CardListStyle>
        {items?.length > 0 ? (
          items?.map((item, index) => (
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
              <Button size="14px" color="#009EF7">
                {checkState(item?.state)}
              </Button>
            </Card>
          ))
        ) : (
          <Alert>هیچ بازدیدی وجود ندارد!</Alert>
        )}
      </CardListStyle>

      {visitCount > 3 ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            small
            size="14px"
            onClick={() => getMoreVisit(items[0]?.farmerCode)}
          >
            مشاهده بیشتر
          </Button>
        </div>
      ) : null}
    </Container>
  );
};

export default VisitList;
