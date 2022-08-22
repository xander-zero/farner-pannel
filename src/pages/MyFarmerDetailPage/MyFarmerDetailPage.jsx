import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// react router dom
import { useParams } from "react-router-dom";

// styled component
import styled from "styled-components"

// components
import MealPlanList from "../../components/MealPlanList/MealPlanList";
import Typography from "../../components/Typography/Typography";
import QuestionnaireList from "../../components/QuestionnaireList/QuestionnaireList";
// react redux
import { detailFarmer } from "../../redux/action/farmer";
import { Container, HeaderTitle, Row } from "../../theme/GlobalStyle";
import { Column, HeaderImg, HeadeTitle, Img, MainContent, Wrapper, } from "./myFarmerDetailStyle";
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
  const myFarmerSelector = useSelector((state) => state.myFarmer);
  const { farmer } = myFarmerSelector;

  // console.log("farmer" , farmer);

  const questionnaire = farmer?.data?.length > 0 ? farmer?.data[0] : [];
  const questionnaireCount = farmer?.data?.length > 0 ? farmer?.count[0] : [];
  const mealPlan = farmer?.data?.length > 0 ? farmer?.data[1] : [];
  const mealPlanCount = farmer?.data?.length > 0 ? farmer?.count[1] : [];
  const visit = farmer?.data?.length > 0 ? farmer?.data[2] : [];
  const visitCount = farmer?.data?.length > 0 ? farmer?.count[2] : [];

  console.log("visit", visit);

  useEffect(() => {
    dispatch(detailFarmer(farmerCode));
  }, [dispatch]);

  if (!farmer) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>

      <FarmerBioRow>

        <HeaderImg>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU" />
        </HeaderImg>

        <HeadeTitle>
          <div>
            <Typography size="16px">
              {(questionnaire && questionnaire[0]?.fullName) || ""}
            </Typography>
          </div>
          <Typography size="16px">
            شماره تماس:{" "}
            {(questionnaire && questionnaire[0]?.phoneNumber) || ""}
          </Typography>
          <Typography size="16px">
            آدرس: {`${(questionnaire && questionnaire[0]?.city) || ""}`}
          </Typography>
        </HeadeTitle>

      </FarmerBioRow>

      {/* <QuestionnaireList items={questionnaire} questionnaireCount={questionnaireCount}/> */}
      <QuestionnaireList items={[{ product: "پسته", date: "1401/6/25", Qcode: "FJATE7920051-1401042536", state: "در حال نگارش" }, { product: "پسته", date: "1401/6/25", Qcode: "FJATE7920051-1401042536", state: "در حال نگارش" }]} questionnaireCount={questionnaireCount} />
      {/* <MealPlanList items={mealPlan} mealPlanCount={mealPlanCount} /> */}
      <MealPlanList items={[{ product: "پسته", date: "1401/6/25", Qcode: "FJATE7920051-1401042536", state: "در حال نگارش" }, { product: "پسته", date: "1401/6/25", Qcode: "FJATE7920051-1401042536", state: "در حال نگارش" }]} mealPlanCount={mealPlanCount} />
      {/* <VisitList items={visit} visitCount={visitCount} /> */}
      <VisitList items={[{ nameProduct: "پسته", date: "1401/6/25", expertCode: "FJATE7920051-1401042536", state: "در حال نگارش" }, { nameProduct: "پسته", expertCode: "FJATE7920051-1401042536", state: "در حال نگارش" }]} visitCount={visitCount} />
    </Container>
  );
};

const FarmerBioRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 0.5rem 1rem;
  border-radius: 20px;
`

export default MyFarmerDetailPage;

