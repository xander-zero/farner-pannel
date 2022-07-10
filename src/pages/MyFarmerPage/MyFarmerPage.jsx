import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { allFarmers, getSearchFarmers } from "../../redux/action/farmer";

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
import { AiFillEdit } from "react-icons/ai";
// import { farmerCardList } from "../../data/farmerData";

const MyFarmerPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    province: "",
    marked: false,
    pid: "",
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

  // const allCities = cities?.cities?.map((item) => ({
  //   label: item.name,
  //   value: item.id,
  // }));

  const filtedCity = cities?.cities?.filter(
    (item) => item.province_id === +form?.province
  );

  const allCity = filtedCity?.map((item) => ({
    label: item?.name,
    value: item.id,
  }));

  const sortProducts = products?.map((product) => ({
    label: product.persianName,
    value: product?.pid,
  }));

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(
      allFarmers(
        expertCode,
        form.fullName,
        form.phoneNumber,
        form.province,
        form.city,
        form.pid,
        form.marked
      )
    );
    // dispatch(getSearchFarmers(form.fullName));
  };

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
        <InputFeild
          onChange={handleChange}
          space
          type="text"
          placeholder="نام و نام خانوادگی"
          name="fullName"
        />
        <InputFeild
          onChange={handleChange}
          space
          type="text"
          placeholder="شماره تماس"
          name="phoneNumber"
        />
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
        <Select
          items={sortProducts}
          onChange={(event) => setForm({ ...form, pid: event.target.value })}
        />

        <Checkbox
          value={form.marked}
          title="ستاره دار"
          onChange={(event) =>
            setForm({ ...form, marked: event.target.checked })
          }
        />
        <Button
          color="#009EF7"
          size="12px"
          small="100px"
          weight="bold"
          onClick={handleSubmit}
        >
          جستجو
        </Button>
      </Row>
      <Wrapper>
        <Select items={initialSort} />
      </Wrapper>
      <div style={{ marginTop: "1rem" }}>
        {farmers ? (
          <CardList icon={<AiFillEdit />} items={farmers} />
        ) : (
          <Typography>Loading...</Typography>
        )}
      </div>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 567px) {
    width: 100%;
  }
`;

export default MyFarmerPage;
