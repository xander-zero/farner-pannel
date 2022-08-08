import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
import UploadFilePage from "../UploadFile/UploadFilePage";
import UploadVideoPage from "../UploadVideoPage/UploadVideoPage";

const Dashboard = () => {
  return (
    <Layout>
      <ToastContainer />
      <Routes>
        <Route path="app" element={<DashboardApp />} />
        <Route path="myFarmer" element={<MyFarmerPage />} />
        <Route path="myFarmer/:farmerCode" element={<MyFarmerDetailPage />} />
        <Route path="profile" element={<MyInformation />} />
        <Route
          path="questionnaire/:farmerCode"
          element={<QuestionnaireListPage />}
        />
        <Route path="mealplan/:farmerCode" element={<MealPlanVisitList />} />
        <Route path="manage-page" element={<ManagePage />} />
        <Route path="manage-page/uploadVideo" element={<UploadVideoPage />} />
        <Route path="manage-page/uploadFile" element={<UploadFilePage />} />
        <Route path="calender" element={<CalenderPage />} />
      </Routes>
    </Layout>
  );
};

export default Dashboard;
