import React from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

// styled componentss
import { Card, Header, Row } from "../QuestionnaireList/questionnaireStyle";
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { CardListStyle } from "../CardList/CardListStyle";
import imgProduct from "../../assets/images/plant.png";
import { formatData } from "../../utils/date";
import { FiDownload } from "react-icons/fi";
import QRCode from "../../assets/images/qr-code.png";
import { moreMealplan } from "../../redux/action/farmer";
import { useNavigate } from "react-router-dom";
// import QRCode from "react-qr-code";

const MealPlanList = ({ items }) => {
  console.log(items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { mealplans } = farmerSelector;

  const getMoreMealplan = (farmerCode) => {
    dispatch(moreMealplan(farmerCode));
  };

  return (
    <Container>
      <HeaderTitle>برنامه غذایی</HeaderTitle>
      <CardListStyle>
        {items?.map((item, index) => (
          <Card key={index}>
            <Header>
              <Row>
                <img src={imgProduct} alt="image-plant" />
                <Typography size="14px" weight="bold">
                  {item?.product}
                </Typography>
              </Row>
              <Typography size="12px" weight="bold">
                تاریخ نگارش : {formatData(item?.date?.toString())}
              </Typography>
            </Header>
            <Header>
              <Typography size="14px" weight="bold">
                {item?.Qcode}
              </Typography>

              <Row>
                <Typography size="14px" weight="bold">
                  {/* <QRCode value={item?.Qcode} size={50} height={100} /> */}
                  <img src={QRCode} />
                </Typography>
              </Row>
            </Header>
            <Row>
              <Typography textAlign="left" size="14px" weight="bold">
                <a href={item?.files} target="_blank">
                  <FiDownload
                    color="#009EF7"
                    size={20}
                    style={{ fontWeight: "bold" }}
                  />
                </a>
              </Typography>
            </Row>
            <Button size="14px" color="#F1416C">
              مشاهده برنامه غذایی
            </Button>
          </Card>
        ))}
      </CardListStyle>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          small
          size="14px"
          onClick={() =>
            navigate(`/dashboard/mealplan/${items[0]?.farmerCode}`)
          }
        >
          مشاهده بیشتر
        </Button>
      </div>
    </Container>
  );
};
export default MealPlanList;
