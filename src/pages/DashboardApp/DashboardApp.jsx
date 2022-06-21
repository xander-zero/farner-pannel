import React from "react";
import Typography from "../../components/Typography/Typography";
import { Card, Dashboard, Left, Right } from "./dashboardStyle";
import Charts from "../../components/Charts/Charts";

const DashboardApp = () => {
  return (
    <Dashboard>
      <Right>
        <Card>
          <Typography>تعداد کشاورزان : 224</Typography>
          <Typography>تعداد برنامه غذایی : 224</Typography>
          <Typography>تعداد بازدید : 224</Typography>
        </Card>
        <Card>
          <Typography>تعداد بازدید محتوا (ماهانه) : 512</Typography>
          <Typography>تعداد بازدید صفحه (ماهانه) : 132</Typography>
        </Card>
      </Right>
      <Left>{/* <Charts /> */}</Left>
    </Dashboard>
  );
};

export default DashboardApp;
