import React from "react";
import Typography from "../../components/Typography/Typography";
import { Card, Dashboard, Left, Right } from "./dashboardStyle";
import Charts from "../../components/Charts/Charts";
import { HeaderTitle } from "../../theme/GlobalStyle";

const DashboardApp = () => {
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
              254
            </Typography>
          </div>
        </Card>
        <Card bgColor="#F1416C">
          <Typography color="#fff" weight="bold">
            محتوا
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
              تعداد بازدید محتوا
            </Typography>
            <Typography color="#fff" size="24px" weight="bold">
              154
            </Typography>
          </div>
        </Card>
        <Card bgColor="#50CD89">
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
              تعداد بازدید صفحه
            </Typography>
            <Typography color="#fff" size="24px" weight="bold">
              654
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
