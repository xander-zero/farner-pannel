import * as api from "../../service/myFarmer";
import { errorMessage, successMessage } from "../../utils/message";

// get all farmers
export const allFarmers =
  (expertCode, fullName, phone, province, city, pid, marked) =>
    async (dispatch) => {
      try {
        // const { data } = await api.getAllFarmer(
        //   expertCode,
        //   fullName,
        //   phone,
        //   province,
        //   city,
        //   pid,
        //   marked
        // );
        // const result = data?.data?.result;
        const result = [
          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },

          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },

          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },

          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },
          
          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          }
        ]
        dispatch({ type: "GET_ALL_FARMERS", payload: result });
      } catch (error) {
        // errorMessage("some thing wrong");
        // const { data } = await api.getAllFarmer(
        //   expertCode,
        //   fullName,
        //   phone,
        //   province,
        //   city,
        //   pid,
        //   marked
        // );
        // const result = data?.data?.result;
        const result = [
          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },

          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },

          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },

          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          },
          
          {
            "_id": "627b8463e9918fa2ce320082",
            "fullName": "سمیه نظامی 2",
            "farmerCode": "FSONE655151",
            "expert": "سیدرضا حسینی",
            "expertCode": "ESEHO907951",
            "phoneNumber": "09054145919",
            "province": "خراسان رضوی",
            "city": "مشهد",
            "products": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10
            ],
            "mealPlans": [
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 2.5
              },
              {
                "Qcode": "FSONE655151-qW8515",
                "area": 30
              },
              {
                "Qcode": "FSONE655151-qb0880",
                "area": 3
              },
              {
                "Qcode": "FNaJa406151-PH03140011131",
                "area": 12
              },
              {
                "Qcode": "FNAJA929951-PC21140012061",
                "area": 50
              }
            ],
            "mealPlanCount": 5,
            "totalArea": 97.5,
            "comment": null,
            "marked": false,
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw9vglASaTDSSdrefQewxE72VRNFXWCe82Q&usqp=CAU"
          }
        ]
        dispatch({ type: "GET_ALL_FARMERS", payload: result });
      }
    };


// get detail farmer
export const detailFarmer = (farmerCode) => async (dispatch) => {
  try {
    const { data } = await api.getDetailFarmer(farmerCode);
    const result = data?.data?.result;
    dispatch({ type: "GET_DETAIL_FARMER", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};



// assign farmer to expert
export const assignFarmer = (data) => async (dispatch) => {
  try {
    const { data } = await api.addAssignFarmer(data);
    console.log(data);
    dispatch({ type: "ASSIGN_FARMER" });
    successMessage("کشاورز با موفقیت تعیین شد");
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

export const sendFileContent = (formData, navigate) => async (dispatch) => {
  console.log(formData);
  try {
    dispatch({ type: "ADD_FILE_CONTENT_LOADING" });
    const { data } = await api.addFileContent(formData);
    dispatch({ type: "ADD_FILE_CONTENT" });
    successMessage("با موفقیت اضافه شد");
    dispatch({ type: "ADD_FILE_CONTENT_DONE" });
    navigate("/dashboard/manage-page");
  } catch (error) {
    errorMessage("some thing wrong");
    dispatch({ type: "ADD_FILE_CONTENT_DONE" });
  }
};

// send video
export const sendVideoContent = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_VIDEO_CONTENT_LOADING" });
    const { data } = await api.addVideoContent(formData);
    dispatch({ type: "ADD_VIDEO_CONTENT" });
    successMessage("با موفقیت اضافه شد");
    dispatch({ type: "ADD_VIDEO_CONTENT_DONE" });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// get count farmer
export const gettingCountFarmer = () => async (dispatch) => {
  try {
    const { data } = await api.getCountFarmer();
    const result = data?.data?.result;
    dispatch({ type: "COUNT_FARMER", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// get count mealplan
export const gettingCountMealplan = () => async (dispatch) => {
  try {
    const { data } = await api.getCountMealplan();
    const result = data?.data?.result;
    dispatch({ type: "COUNT_MEALPLAN", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// get count visit
export const gettingCountVisit = () => async (dispatch) => {
  try {
    const { data } = await api.getCountVisit();
    const result = data?.data?.result;
    dispatch({ type: "COUNT_VISIT", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// search farmers
export const getSearchFarmers = (name) => async (dispatch) => {
  // console.log(key, value);
  try {
    const { data } = await api.searchFarmers(name);
    const result = data?.data?.result;
    dispatch({ type: "SEARCH_FARMERS", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

export const addCommentToFarmer =
  (data, farmerCode, expertCode) => async (dispatch) => {
    try {
      await api.addComment(data, farmerCode);
      dispatch({ type: "ADD_COMMENT_TO_FARMER" });
      dispatch(allFarmers(expertCode));
      successMessage("با موفقیت ارسال شد");
    } catch (error) { }
  };

export const moreQuestionnaire = (farmerCode) => async (dispatch) => {
  try {
    const { data } = await api.getMoreQuestionnaire(farmerCode);
    const result = data?.data?.result;
    dispatch({ type: "ALL_QUESTIONNAIRE", payload: result });
  } catch (error) {
    errorMessage("wrong");
  }
};

export const moreMealplan = (farmerCode) => async (dispatch) => {
  try {
    const { data } = await api.getMoreMealplan(farmerCode);
    const result = data?.data?.result;
    dispatch({ type: "ALL_MEALPLAN", payload: result });
  } catch (error) {
    errorMessage("wrong");
  }
};

export const getVisit = (farmerCode) => async (dispatch) => {
  try {
    const { data } = await api.getMoreVisit(farmerCode);
    const result = data?.data?.result;
    dispatch({ type: "ALL_VISIT", payload: result });
  } catch (error) {
    errorMessage("wrong");
  }
};

export const sortFarmer = (expertCode, mealplan, area) => async (dispatch) => {
  try {
    const { data } = await api.sortAllFarmer(expertCode, mealplan, area);
    const result = data?.data?.result;
    dispatch({ type: "SORT_FARMER", payload: result });
  } catch (error) {
    errorMessage("wrong");
  }
};

// send information
export const addInformation = (information) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_INFORMATION_LOADING" });
    const { data } = await api.sendIfno(information);
    dispatch({ type: "SEND_INFORMATION" });
    dispatch({ type: "SEND_INFORMATION_LOADING_RESET" });
    console.log("data", data);
    successMessage(data?.data?.message);
  } catch (error) {
    errorMessage("wrong");
  }
};

export const allCarriers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCarriers();
    const result = data?.data?.result;
    dispatch({ type: "GET_ALL_CARRIERS", payload: result });
  } catch (error) {
    errorMessage("wrong");
  }
};

export const updatedCarrier = (carrierData, sid) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_CARRIER_LOADING" });
    const { data } = await api.updateCarrier(carrierData, sid);
    const result = data?.data?.result;
    dispatch({ type: "UPDATE_CARRIER", payload: result });
    dispatch({ type: "RESET_UPDATE_CARRIER_LOADING" });
  } catch (error) {
    errorMessage(error?.data?.message);
  }
};
