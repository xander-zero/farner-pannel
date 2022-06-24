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
        <Card>
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
            <Typography size="24px" weight="bold">
              تعداد کشاورزان
            </Typography>
            <Typography size="24px" weight="bold">
              254
            </Typography>
          </div>
        </Card>
        <Card>
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
            <Typography size="24px" weight="bold">
              تعداد بازدید محتوا
            </Typography>
            <Typography size="24px" weight="bold">
              154
            </Typography>
          </div>
        </Card>
        <Card>
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
            <Typography size="24px" weight="bold">
              تعداد بازدید صفحه
            </Typography>
            <Typography size="24px" weight="bold">
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
