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
import { farmerDetailData } from "../../data/farmerData";
import VisitList from "../../components/Visit/VisitList";

const MyFarmerDetailPage = () => {
  // use params
  const { farmerCode } = useParams();
  // const farmer = farmerDetailData;
  // const { avatarUrl } = farmer;
  // console.log(farmer);
  // // declare dispatch
  const dispatch = useDispatch();

  // fermer selector
  // const myFarmerSelector = useSelector((state) => state.myFarmer);
  // const { farmer } = myFarmerSelector;

  // console.log("farmer", farmer);

  useEffect(() => {
    dispatch(detailFarmer(farmerCode));
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <HeaderTitle>جزییات کشاورز</HeaderTitle>
        <Button size="14px" color="#009EF7" small>
          assign
        </Button>
      </Row>
      {/* <Wrapper>
        <HeaderImg>
          <Img src={farmer?.avatarUrl} />
          <HeadeTitle>
            <Typography size="16px">{farmer?.fullName}</Typography>
            <Typography size="12px">{farmer?.phoneNumber}</Typography>
            <Typography size="10px">
              آدرس : {`${farmer?.province} ${farmer?.city}`}
            </Typography>
          </HeadeTitle>
        </HeaderImg>
        <MainContent>
          <Column></Column>
        </MainContent>
        <Row></Row>
      </Wrapper>
      <QuestionnaireList items={farmer?.products} />
      <MealPlanList items={farmer?.mealPlans} />
      <VisitList items={farmer?.mealPlans} /> */}
    </Container>
  );
};

export default MyFarmerDetailPage;
