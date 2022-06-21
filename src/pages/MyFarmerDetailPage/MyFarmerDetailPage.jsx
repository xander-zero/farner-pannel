import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// react router dom
import { useParams } from "react-router-dom";

// components
import MealPlanList from "../../components/MealPlanList/MealPlanList";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import QuestionnaireList from "../../components/QuestionnaireList/QuestionnaireList";
// react redux
import { detailFarmer } from "../../redux/action/farmer";
import { Container, HeaderTitle, Row } from "../../theme/GlobalStyle";
import {
  Column,
  HeaderImg,
  HeadeTitle,
  Img,
  MainContent,
  Wrapper,
} from "./myFarmerDetailStyle";

const MyFarmerDetailPage = () => {
  // use params
  const { farmerCode } = useParams();

  // declare dispatch
  const dispatch = useDispatch();

  // fermer selector
  const myFarmerSelector = useSelector((state) => state.myFarmer);
  const { farmer } = myFarmerSelector;

  console.log("farmer", farmer);

  useEffect(() => {
    dispatch(detailFarmer(farmerCode));
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <HeaderTitle>جزییات کشاورز</HeaderTitle>
        <Button small>assign</Button>
      </Row>
      <Wrapper>
        <HeaderImg>
          <Img src={farmer?.avatarUrl} />
          <HeadeTitle>
            <Typography size="16px">{farmer?.fullName}</Typography>
            <Typography size="14px">{farmer?.phoneNumber}</Typography>
          </HeadeTitle>
        </HeaderImg>
        <MainContent>
          <Column>
            <Typography>
              آدرس : {`${farmer?.province} ${farmer?.city}`}
            </Typography>
          </Column>
        </MainContent>
        <Row></Row>
      </Wrapper>
      <QuestionnaireList items={farmer?.products} />
      <MealPlanList items={farmer?.mealPlans} />
    </Container>
  );
};

export default MyFarmerDetailPage;
