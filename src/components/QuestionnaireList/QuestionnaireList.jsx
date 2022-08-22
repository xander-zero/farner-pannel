import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Typography from "../Typography/Typography";

// styled components
import { BodyFarmerDataRowContainer,State,SeeMore, Container, FarmerDataRowContainer, HeaderFarmerDataRowContainer, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import { Card, Header, Row } from "./questionnaireStyle";
import Button from "../Button/Button";
import imgProduct from "../../assets/images/plant.png";
import { formatData } from "../../utils/date";
import QRCode from "../../assets/images/qr-code.png";
import { moreQuestionnaire } from "../../redux/action/farmer";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import styled from "styled-components";
// import QRCode from "react-qr-code";

// icon
import {BsArrowLeftShort} from "react-icons/bs"

const QuestionnaireList = ({ items, questionnaireCount }) => {
  const checkState = (state) => {
    switch (state) {
      case "supportCheck":
        return "...در حال بررسی";
      case "mealPlanCheck":
        return "...در حال نگارش";
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
    <FarmerDataRowContainer>

      <HeaderFarmerDataRowContainer>
        <p>پرسشنامه ها</p>
        {questionnaireCount = 2 ? (
          <SeeMore onClick={() => navigate(`/dashboard/questionnaire/${items[0]?.farmerCode}`)}>
            <p >
              مشاهده بیشتر<BsArrowLeftShort size={22}/>
            </p>
          </SeeMore>
        ) : null}
      </HeaderFarmerDataRowContainer>

      <BodyFarmerDataRowContainer>
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

                <State>
                  <p>{checkState(item?.state)}</p>
                </State>
              </Card>
            ))
          ) : (
            <Alert>هیچ پرسشنامه ای وجود ندارد</Alert>
          )}

          {/* </Fade>
        </div> */}
        </CardListStyle>
      </BodyFarmerDataRowContainer>

    </FarmerDataRowContainer>
  );
};

export default QuestionnaireList;



