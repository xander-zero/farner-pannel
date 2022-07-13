import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { moreQuestionnaire } from "../../redux/action/farmer";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
// import QRCode from "react-qr-code";

const QuestionnaireList = ({ items, questionnaireCount }) => {
  const checkState = (state) => {
    switch (state) {
      case "supportCheck":
        return "در حال بررسی";
      case "mealPlanCheck":
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

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { questionnaires } = farmerSelector;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getMoreQuestionnaire = (farmerCode) => {
    dispatch(moreQuestionnaire(farmerCode));
  };

  console.log(items);

  return (
    <Container>
      <HeaderTitle>پرسشنامه</HeaderTitle>
      <CardListStyle>
        {/* <div style={{ width: "100%" }}>
          <Fade scale={0.4}> */}

        {items?.length > 0 ? (
          items?.map((item, index) => (
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
                {checkState(item?.state)}
              </Button>
            </Card>
          ))
        ) : (
          <Alert>هیچ پرسشنامه ای وجود ندارد</Alert>
        )}

        {/* </Fade>
        </div> */}
      </CardListStyle>
      {questionnaireCount > 3 ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            small
            size="14px"
            onClick={() =>
              navigate(`/dashboard/questionnaire/${items[0]?.farmerCode}`)
            }
          >
            مشاهده بیشتر
          </Button>
        </div>
      ) : null}
    </Container>
  );
};
export default QuestionnaireList;
