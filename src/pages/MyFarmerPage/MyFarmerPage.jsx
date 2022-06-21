import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { allFarmers } from "../../redux/action/farmer";

// components
import CardList from "../../components/CardList/CardList";
import Typography from "../../components/Typography/Typography";

// styled components
import { Container, HeaderTitle, Row } from "../../theme/GlobalStyle";
import InputFeild from "../../components/InputFeild/InputFeild";
import Select from "../../components/Select/Select";
import { allCities, allProvinces } from "../../redux/action/general";
import Button from "../../components/Button/Button";

const MyFarmerPage = () => {
  // declare dispatch
  const dispatch = useDispatch();

  const initialSort = [
    {
      id: "1",
      name: "بیشترین",
      value: "most",
    },
    {
      id: "2",
      name: "مساحت",
      value: "area",
    },
    {
      id: "3",
      name: "بیشترین برنامه",
      value: "most-mealPlan",
    },
  ];

  // myFarmerSelector
  const farmerSelector = useSelector((state) => state.myFarmer);
  const { farmers } = farmerSelector;

  useEffect(() => {
    dispatch(allFarmers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allProvinces());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCities());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <HeaderTitle>کشاورزان من</HeaderTitle>
      </Row>
      <Row>
        <InputFeild type="text" placeholder="نام و نام خانوادگی" />
        <InputFeild type="text" placeholder="شماره تماس" />
        <InputFeild type="text" placeholder="شماره تماس" />
      </Row>
      <Row>
        <Select />
        <Select />
        <Select items={initialSort} />
      </Row>

      <Button small>جستجو</Button>
      {farmers ? (
        <CardList items={farmers} />
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
};
export default MyFarmerPage;
