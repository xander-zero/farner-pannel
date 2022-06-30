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
import {
  allCities,
  allProvinces,
  getAllProducts,
} from "../../redux/action/general";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { userData } from "../../help/userData";
import Checkbox from "../../components/Checkbox/Checkbox";
import styled from "styled-components";

// import { farmerCardList } from "../../data/farmerData";

const MyFarmerPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    province: "",
  });
  // declare dispatch
  const dispatch = useDispatch();

  const initialSort = [
    {
      id: "1",
      label: "انتخاب کنید",
      value: "",
    },
    {
      id: "2",
      label: "بیشترین مساحت",
      value: "most",
    },
    {
      id: "2",
      label: "بیشترین برنامه",
      value: "most-mealPlan",
    },
  ];

  // myFarmerSelector
  const farmerSelector = useSelector((state) => state.myFarmer);
  const { farmers } = farmerSelector;

  const generalSelector = useSelector((state) => state.general);

  const { provinces, cities, products } = generalSelector;
  const allProvince = provinces?.provinces?.map((item) => ({
    label: item?.name,
    value: item.id,
  }));

  const userInformation = userData();
  const expertCode = userInformation?.data?.result?.expert?.expertCode;
  console.log(expertCode);

  // const allCities = cities?.cities?.map((item) => ({
  //   label: item.name,
  //   value: item.id,
  // }));

  const filtedCity = cities?.cities?.filter(
    (item) => item.province_id == form?.province
  );

  const allCity = filtedCity?.map((item) => ({
    label: item?.name,
    value: item.id,
  }));

  const sortProducts = products?.map((product) => ({
    label: product.persianName,
    value: product?.pid,
  }));

  console.log("filtedCity", filtedCity);

  useEffect(() => {
    dispatch(allFarmers(expertCode));
  }, [dispatch]);

  useEffect(() => {
    dispatch(allProvinces());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <HeaderTitle>کشاورزان من</HeaderTitle>
      </Row>
      <Row>
        <InputFeild space type="text" placeholder="نام و نام خانوادگی" />
        <InputFeild space type="text" placeholder="شماره تماس" />
        <Select
          items={allProvince}
          onChange={(event) =>
            setForm({ ...form, province: event.target.value })
          }
        />
        {allCity?.length > 1 && (
          <Select
            items={allCity ? allCity : []}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
          />
        )}
        <Select items={sortProducts} />

        <Checkbox title="ستاره دار" />
        <Button color="#009EF7" size="12px" small="100px" weight="bold">
          جستجو
        </Button>
      </Row>
      <Wrapper>
        <Select items={initialSort} />
      </Wrapper>
      <div style={{ marginTop: "1rem" }}>
        {farmers ? (
          <CardList items={farmers} />
        ) : (
          <Typography>Loading...</Typography>
        )}
      </div>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export default MyFarmerPage;
