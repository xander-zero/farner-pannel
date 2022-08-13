import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import {
  allFarmers,
  getSearchFarmers,
  sortFarmer,
} from "../../redux/action/farmer";

// components
import CardList from "../../components/CardList/CardList";
import Typography from "../../components/Typography/Typography";

// styled components
import { Container, HeaderTitle, Row } from "../../theme/GlobalStyle";
import InputFeild from "../../components/InputFeild/InputFeild";
import Select from "../../components/Select/Select";
import {
  allCitess,
  allProvinces,
  getAllProducts,
} from "../../redux/action/general";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { userData } from "../../help/userData";
import Checkbox from "../../components/Checkbox/Checkbox";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
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
  const [sort, setSort] = useState({
    mealPlan: "",
    area: "",
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
      value: "descending-area",
    },
    {
      id: "3",
      label: "بیشترین برنامه غذایی",
      value: "descending-mealplan",
    },
    {
      id: "4",
      label: "کمترین مساحت",
      value: "acsending-area",
    },
    {
      id: "5",
      label: "کمترین برنامه غذایی",
      value: "ascending-mealplan",
    },
  ];

  // myFarmerSelector
  const farmerSelector = useSelector((state) => state.myFarmer);
  const { farmers } = farmerSelector;

  const generalSelector = useSelector((state) => state.general);
  const choice = {
    label: "انتخاب کنید",
    value: "",
  };
  const { provinces, cities, products } = generalSelector;
  let allProvince = provinces
    ? provinces?.provinces?.map((item) => {
        return {
          label: item?.name,
          value: item.id,
        };
      })
    : [];

  const assignProvince = allProvince?.map((item) => ({ ...item }));
  // let assignProvince = [...allProvince, { ...choice }];
  console.log("assignProvince", assignProvince);

  // [{ ...choice }, ...allProvince];

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

  let asasignProducts = [{ ...choice }, ...sortProducts];

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

  const handleChangeSort = (event) => {
    const { value } = event.target;
    switch (value) {
      case "descending-area":
        return dispatch(sortFarmer(expertCode, "", "descending"));
      case "descending-mealplan":
        return dispatch(sortFarmer(expertCode, "descending", ""));
      case "acsending-area":
        return dispatch(sortFarmer(expertCode, "", "ascending"));
      case "ascending-mealplan":
        return dispatch(setForm(expertCode, "ascending", ""));
      default:
        return;
    }
  };

  useEffect(() => {
    dispatch(allFarmers(expertCode));
  }, [dispatch]);

  useEffect(() => {
    dispatch(allProvinces());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allCitess());
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
          items={assignProvince ? assignProvince : []}
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
          items={asasignProducts ? asasignProducts : []}
          onChange={(event) => setForm({ ...form, pid: event.target.value })}
        />

        <Checkbox
          value={form.marked}
          title="ستاره دار"
          onChange={(event) =>
            setForm({ ...form, marked: event.target.checked })
          }
        />
        <Refresh onClick={() => dispatch(allFarmers(expertCode))}>
          <FiRefreshCcw size={20} />
        </Refresh>
        <Button
          color="#009EF7"
          size="12px"
          small="100px"
          weight="bold"
          onClick={handleSubmit}
        >
          جستجو
        </Button>

        {/* <Button
          color="#009EF7"
          size="12px"
          small="50px"
          weight="bold"
          onClick={() => dispatch(allFarmers(expertCode))}
        > */}

        {/* </Button> */}
      </Row>
      <Wrapper>
        <label style={{ width: "100%", fontSize: "14px", marginTop: "10px" }}>
          مرتب سازی براساس :{" "}
        </label>
        <Select
          label="مرتب سازی براساس :"
          items={initialSort ? initialSort : []}
          onChange={handleChangeSort}
        />
      </Wrapper>
      <div style={{ marginTop: "1rem" }}>
        {farmers ? (
          <CardList
            expertCode={expertCode}
            icon={<AiFillEdit />}
            items={farmers}
          />
        ) : (
          <Typography>Loading...</Typography>
        )}
      </div>
    </Container>
  );
};

const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 567px) {
    width: 100%;
  }
`;

export const Refresh = styled.button`
  background-color: #009ef7;
  color: #fff;
  outline: none;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  margin-top: 16px;
  margin-left: 5px;
`;

export default MyFarmerPage;
