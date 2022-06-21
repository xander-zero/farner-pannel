import React from "react";

// react router dom
import { useNavigate } from "react-router-dom";

import { AiOutlineFileDone } from "react-icons/ai";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
// components
import Typography from "../Typography/Typography";
import InputFeild from "../InputFeild/InputFeild";

import { CardLeft, CardRights, CardStyle, Icon, Img } from "./cardStyle";
import { Row } from "../../theme/GlobalStyle";
// image farmer
import bg from "../../assets/images/ibrahima-toure-GAepqKfzZFI-unsplash.jpg";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <CardStyle
      onClick={() => navigate(`/dashboard/myFarmer/${item?.farmerCode}`)}
    >
      <CardRights>
        <Row>
          <Typography size="16px">{item?.fullName}</Typography>
          <Icon>
            <a href={`tel:${item?.phoneNumber}`}>
              <FiPhoneCall size={25} color="#fff" />
            </a>
          </Icon>
        </Row>
        <Typography size="12px">
          {item?.mealPlanCount} برنامه غذایی <AiOutlineFileDone />
        </Typography>
        <InputFeild type="text" placeholder="یادداشت خود را بنویسید..." />
      </CardRights>
      <CardLeft>
        <Img src={bg} />
        <Typography size="10px">
          {`${item?.province} ${item.city}`} <TiLocationArrowOutline />
        </Typography>
      </CardLeft>
    </CardStyle>
  );
};

export default Card;
