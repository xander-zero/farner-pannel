import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { allFarmers, getSearchFarmers, sortFarmer} from "../../redux/action/farmer";

// components
import CardList from "../../components/CardList/CardList";
import Typography from "../../components/Typography/Typography";

// styled components
import { Container, HeaderTitle, Row } from "../../theme/GlobalStyle";
import InputFeild from "../../components/InputFeild/InputFeild";
import Select from "../../components/Select/Select";
import { allCitess, allProvinces, getAllProducts,} from "../../redux/action/general";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { userData } from "../../help/userData";
import Checkbox from "../../components/Checkbox/Checkbox";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
// import { farmerCardList } from "../../data/farmerData";

import sortIcon from "../../assets/images/sort.png";

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
      label: "بیشترین مساحت",
      value: "descending-area",
    },
    {
      id: "2",
      label: "بیشترین برنامه غذایی",
      value: "descending-mealplan",
    },
    {
      id: "3",
      label: "کمترین مساحت",
      value: "acsending-area",
    },
    {
      id: "4",
      label: "کمترین برنامه غذایی",
      value: "ascending-mealplan",
    },
  ];

  // myFarmerSelector
  const farmerSelector = useSelector((state) => state.myFarmer);
  const { farmers } = farmerSelector;
  console.log("farmer", farmers);

  const generalSelector = useSelector((state) => state.general);
  const choice = {
    label: "-- محصولات --",
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

  const filtedCity = cities?.cities?.filter((item) => item.province_id === +form?.province);

  const allCity = filtedCity?.map((item) => ({
    label: item?.name,
    value: item.id,
  }));

  const sortProducts = products?.map((product) => ({
    label: product.persianName,
    value: product?.pid,
  }));

  let asasignProducts = [{ ...choice }, ...sortProducts];

  const reset = () => {
    setForm({
      fullName: "",
      phoneNumber: "",
      city: "",
      province: "",
      marked: false,
      pid: "",
    })
  }

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

  const refreshFilter = () => {
    dispatch(allFarmers(expertCode));
    // reset();
  }

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
        <SearchBox>

          <InfoBox>
            <SearchInput onChange={handleChange} space type="text" placeholder="نام و نام خانوادگی" name="fullName" />
            <SearchInput onChange={handleChange} space type="text" placeholder="شماره تماس" name="phoneNumber" />
          </InfoBox>

          <SelectBox>
            <SearchSelect onChange={(event) => setForm({ ...form, province: event.target.value })}>
              <option>-- انتخاب استان --</option>
              {
                assignProvince?.length > 0
                  ? assignProvince?.map((province, index) => (
                    <option
                      key={index}
                      value={province?.value}
                    >
                      {province?.label}
                    </option>
                  ))
                  : []
              }
            </SearchSelect>

            <SearchSelect onChange={(event) => setForm({ ...form, city: event.target.value })}>
              {
                allCity?.length > 0
                && allCity?.map((city, index) => (
                  <option
                    key={index}
                    value={city?.value}
                  >
                    {city?.label}
                  </option>
                ))
              }
            </SearchSelect>

            <SearchSelect onChange={(event) => setForm({ ...form, pid: event.target.value })}>
              {
                asasignProducts?.length > 0
                && asasignProducts?.map((product, index) => (
                  <option
                    key={index}
                    value={product?.value}
                  >
                    {product?.label}
                  </option>
                ))
              }
            </SearchSelect>
          </SelectBox>

          <CTAbox>
            <Button color="#009EF7" size="12px" small="100px" weight="bold" onClick={handleSubmit}>جستجو</Button>
            <RefreshFilter onClick={refreshFilter}>لغو فیلتر</RefreshFilter>
          </CTAbox>



          {/* <Button
          color="#009EF7"
          size="12px"
          small="50px"
          weight="bold"
          onClick={() => dispatch(allFarmers(expertCode))}
        > */}

          {/* </Button> */}
        </SearchBox>
      </Row>
      
      <SortFilterBox>
        <SortBox>
          <LabelBox>
            <img src={sortIcon} alt="" />
            <label htmlFor="">مرتب سازی بر اساس: </label>
          </LabelBox>

          <CheckBoxBox>
            {
              initialSort?.length > 0
              ? initialSort?.map((sort, index) => (
                // <option
                //   key={index}
                //   value={sort?.value}
                // >
                //   {sort?.label}
                // </option>
                <div style={{display : "flex",gap:"0.2rem" ,flexDirection:"row" ,width:"35%", justifyContent : "space-around" , alignItems : "center"}}>
                  <label style={{fontSize : "14px"}}>{sort?.label}</label>
                  <input type="checkbox" style={{backgroundColor : "#f0f0f0" , border : "1px solid #dfdfdf" , borderRadius : "3px"}} />
                </div>
              ))
              : []
            }
            <Checkbox value={form.marked} title="ستاره دار" onChange={(event) => setForm({ ...form, marked: event.target.checked })} />

            
          </CheckBoxBox>

          {/* <Select
            items={initialSort ? initialSort : []}
            onChange={handleChangeSort}
          /> */}
        </SortBox>
         
      </SortFilterBox>
          
      <WrapperCardList>
        {farmers ? (
          <CardList
            expertCode={expertCode}
            icon={<AiFillEdit />}
            items={farmers}
          />
        ) : (
          <Typography>Loading...</Typography>
        )}
      </WrapperCardList>

    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;

  label {
    
  }
  @media (max-width: 567px) {
    width: 100%;
  }
`;

const WrapperCardList = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`

export const Refresh = styled.button`
  background-color: #009ef7;
  color: #fff;
  outline: none;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  /* margin-top: 16px; */
  margin-left: 5px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`

export const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`

export const SearchInput = styled.input`
  background-color: #FFFFFF;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0.5rem 0.8rem;
  border: none;
  outline: none;
  font-size: 0.8rem;

`

export const SearchSelect = styled.select`
  background-color: #FFFFFF;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  border: none;
  outline: none;
  font-size: 0.8rem;
  width: 150px;
`

export const CTAbox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`

export const RefreshFilter = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  text-decoration-line: underline;
  color: #B40000;
  cursor: pointer;
`

export const SortBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;

`

export const LabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  gap: 0.2rem;

  img {
    width: 20px;
  }
`

export const CustomDiv = styled.div`
  
`

export const CheckBoxBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.52rem;
  /* background-color: red; */
  width: 80%;

  input[type=checkbox] {
    background-color: red;
  }

`

export const SortFilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`



export default MyFarmerPage;
