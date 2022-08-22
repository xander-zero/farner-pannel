import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

// styled componentss
import { Card, Header, Row } from "../QuestionnaireList/questionnaireStyle";
import { FarmerDataRowContainer, HeaderFarmerDataRowContainer, SeeMore, BodyFarmerDataRowContainer,State, Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import QRCode from "react-qr-code";
import { getVisit } from "../../redux/action/farmer";
import styled from "styled-components";
import Alert from "../Alert/Alert";

import imgProduct from "../../assets/images/plant.png";

// icon
import { BsArrowLeftShort } from "react-icons/bs";

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
  const navigate = useNavigate();

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { visits } = farmerSelector;

  const getMoreVisit = (farmerCode) => {
    dispatch(getVisit(farmerCode));
  };

  return (
    <FarmerDataRowContainer>
 
      <HeaderFarmerDataRowContainer>
        <p>درخواست های بازدید</p>
        {visitCount = 2 ? (
          <SeeMore onClick={() => navigate(`/dashboard/questionnaire/${items[0]?.farmerCode}`)}>
            <p>
              مشاهده بیشتر<BsArrowLeftShort size={22} />
            </p>
          </SeeMore>
        ) : null}
      </HeaderFarmerDataRowContainer>

      <BodyFarmerDataRowContainer>
        <CardListStyle>
          {items?.length > 0 ? (
            items?.map((item, index) => (
              <Card key={index}>
                
                <Header>
                  <Row>
                    <img src={imgProduct} />
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

                <State>
                    <p>{checkState(item?.state)}</p>
                </State>

              </Card>
            ))
          ) : (
            <Alert>هیچ بازدیدی وجود ندارد!</Alert>
          )}
        </CardListStyle>
      </BodyFarmerDataRowContainer>

    </FarmerDataRowContainer>
  );
};

export default VisitList;
