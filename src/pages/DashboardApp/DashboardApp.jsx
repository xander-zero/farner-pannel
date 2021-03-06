import React from "react";
import Typography from "../../components/Typography/Typography";
import { Card, Dashboard, Right } from "./dashboardStyle";
import { HeaderTitle } from "../../theme/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  gettingCountFarmer,
  gettingCountMealplan,
  gettingCountVisit,
} from "../../redux/action/farmer";

const DashboardApp = () => {
  const dispatch = useDispatch();

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { countFarmer, countMealplan, countVisit } = farmerSelector;

  useEffect(() => {
    dispatch(gettingCountFarmer());
  }, [dispatch]);

  useEffect(() => {
    dispatch(gettingCountMealplan());
  }, [dispatch]);

  useEffect(() => {
    dispatch(gettingCountVisit());
  }, [dispatch]);

  return (
    <Dashboard>
      <HeaderTitle>پیشخوان من</HeaderTitle>
      <Right>
        <Card bgColor="#009EF7">
          <Typography color="#fff" weight="bold">
            کشاورزان
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "200px",
            }}
          >
            <Typography color="#fff" size="24px" weight="bold">
              تعداد کشاورزان
            </Typography>
            <Typography color="#fff" size="24px" weight="bold">
              {countFarmer}
            </Typography>
          </div>
        </Card>
        <Card bgColor="#F1416C">
          <Typography color="#fff" weight="bold">
            بازدید
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "200px",
            }}
          >
            <Typography color="#fff" size="24px" weight="bold">
              تعداد بازدید
            </Typography>
            <Typography color="#fff" size="24px" weight="bold">
              {countVisit}
            </Typography>
          </div>
        </Card>
        <Card bgColor="#50CD89">
          <Typography color="#fff" weight="bold">
            برنامه غذایی
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "200px",
            }}
          >
            <Typography color="#fff" size="24px" weight="bold">
              تعداد برنامه غذایی
            </Typography>
            <Typography color="#fff" size="24px" weight="bold">
              {countMealplan}
            </Typography>
          </div>
        </Card>
        {/* <Card>
          <Typography>تعداد بازدید محتوا (ماهانه) : 512</Typography>
          <Typography>تعداد بازدید صفحه (ماهانه) : 132</Typography>
        </Card> */}
      </Right>
      {/* <Left>
        <Charts />
      </Left> */}
    </Dashboard>
  );
};

export default DashboardApp;
