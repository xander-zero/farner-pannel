import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components

// styled components
import { Container, HeaderTitle } from "../../../theme/GlobalStyle";
import { CardListStyle } from "../../../components/CardList/CardListStyle";
import {
  Card,
  Header,
  Row,
} from "../../../components/QuestionnaireList/questionnaireStyle";
import imgProduct from "../../../assets/images/plant.png";
import { formatData } from "../../../utils/date";
import QRCode from "../../../assets/images/qr-code.png";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "../../../components/Typography/Typography";
import Button from "../../../components/Button/Button";
import { getVisit, moreQuestionnaire } from "../../../redux/action/farmer";
// import QRCode from "react-qr-code";

const VisitListPage = () => {
  const { farmerCode } = useParams();

  console.log(farmerCode);

  const dispatch = useDispatch();

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
  const { visits } = farmerSelector;

  useEffect(() => {
    dispatch(getVisit(farmerCode));
  }, [dispatch, farmerCode]);

  return (
    <Container>
      <HeaderTitle>پرسشنامه</HeaderTitle>
      <CardListStyle>
        {/* <div style={{ width: "100%" }}>
          <Fade scale={0.4}> */}
        {visits?.map((item, index) => (
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
        ))}

        {/* </Fade>
        </div> */}
      </CardListStyle>
      {/* <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          small
          size="14px"
          onClick={() => getMoreQuestionnaire(items[0]?.farmerCode)}
        >
          مشاهده بیشتر
        </Button>
      </div> */}
    </Container>
  );
};
export default VisitListPage;
