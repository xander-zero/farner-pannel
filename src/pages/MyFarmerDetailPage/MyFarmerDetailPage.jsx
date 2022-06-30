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
import { AiOutlinePhone } from "react-icons/ai";
const MyFarmerDetailPage = () => {
  // use params
  const { farmerCode } = useParams();
  // const farmer = farmerDetailData;
  // const { avatarUrl } = farmer;
  // console.log(farmer);
  // // declare dispatch
  const dispatch = useDispatch();

  // fermer selector
  const myFarmerSelector = useSelector((state) => state.myFarmer);
  const { farmer } = myFarmerSelector;

  const questionnaire = farmer[0];
  const mealPlan = farmer[1];
  const visit = farmer[2];

  useEffect(() => {
    dispatch(detailFarmer(farmerCode));
  }, [dispatch]);

  if (!farmer) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Row>
        <HeaderTitle>جزییات کشاورز</HeaderTitle>
        {/* <Button size="14px" color="#009EF7" small>
          assign
        </Button> */}
      </Row>
      <Wrapper>
        <HeaderImg>
          <Img src={""} />
          <HeadeTitle>
            <div>
              <Typography size="16px">
                {questionnaire && questionnaire[0]?.fullName}
              </Typography>
            </div>
            <Typography size="16px">
              شماره تماس : {questionnaire && questionnaire[0]?.phoneNumber}
            </Typography>
            <Typography size="16px">
              آدرس : {`${questionnaire && questionnaire[0]?.city}`}
            </Typography>
          </HeadeTitle>
        </HeaderImg>
        <MainContent>
          <Column></Column>
        </MainContent>
        <Row></Row>
      </Wrapper>
      <QuestionnaireList items={questionnaire} />
      <MealPlanList items={mealPlan} />
      <VisitList items={farmer?.mealPlans} />
    </Container>
  );
};

export default MyFarmerDetailPage;
