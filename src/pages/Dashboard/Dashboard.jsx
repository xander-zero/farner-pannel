import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { userData } from "../../help/userData";

// components
import Layout from "../../layout/MainLayout";
import CalenderPage from "../CalenderPage/CalenderPage";
import DashboardApp from "../DashboardApp/DashboardApp";
import ManagePage from "../ManagePage/ManagePage";
import MealPlanVisitList from "../MoreDetailsFarmer/MealPlanListPage/MealPlanListPage";
import QuestionnaireListPage from "../MoreDetailsFarmer/QuestionnaireListPage/QuestionnaireListPage";
import MyFarmerDetailPage from "../MyFarmerDetailPage/MyFarmerDetailPage";
import MyFarmerPage from "../MyFarmerPage/MyFarmerPage";
import MyInformation from "../MyInformation/MyInformation";
import RecordProfession from "../RecordProfession/RecordProfession";
import UploadFilePage from "../UploadFile/UploadFilePage";
import UploadVideoPage from "../UploadVideoPage/UploadVideoPage";

const Dashboard = () => { 
  const userInformation = userData();

  console.log(userInformation); 

  return ( 
    <Layout>   
      <ToastContainer />
      <Routes>
        {/* <Route path="content-video" element={<ManageWeblogVideo />} />
        <Route path="content-text" element={<ManageWeblogText />} />
        <Route path="manage-page" element={<ManagementPage />} /> */}
        <Route path="app" element={<DashboardApp />} />
        <Route path="myFarmer" element={<MyFarmerPage />} />
        <Route path="myFarmer/:farmerCode" element={<MyFarmerDetailPage />} />
        <Route path="profile" element={<MyInformation />} />
        <Route path="questionnaire/:farmerCode" element={<QuestionnaireListPage />} />
        <Route path="mealplan/:farmerCode" element={<MealPlanVisitList />} />
        <Route path="manage-page" element={<ManagePage />} />
        <Route path="manage-page/uploadVideo" element={<UploadVideoPage />} />
        <Route path="manage-page/uploadFile" element={<UploadFilePage />} />
        <Route path="calender" element={<CalenderPage />} />
        <Route path="record-profession" element={<RecordProfession />} />
      </Routes>
    </Layout>
  );
};

export default Dashboard;
