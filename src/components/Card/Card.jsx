import React from "react";

// react router dom
import { useNavigate } from "react-router-dom";

import { AiOutlineFile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
// components
import Typography from "../Typography/Typography";
import InputFeild from "../InputFeild/InputFeild";

import { CardLeft, CardRights, CardStyle, Icon, Img } from "./cardStyle";
import { Row } from "../../theme/GlobalStyle";
// image farmer
import bg from "../../assets/images/ibrahima-toure-GAepqKfzZFI-unsplash.jpg";

const Card = ({ item, icon }) => {
  const navigate = useNavigate();

  return (
    <CardStyle>
      <CardRights>
        <Row>
          <Typography weight="bold" size="18px">
            {item?.fullName}
          </Typography>
          <Icon>
            <a href={`tel:${item?.phoneNumber}`}>
              <FiPhoneCall size={25} color="#fff" />
            </a>
          </Icon>
        </Row>
        <Typography size="12px">
          <AiOutlineFile /> {item?.mealPlanCount} برنامه غذایی
        </Typography>
        <InputFeild
          icon={icon}
          type="text"
          placeholder={`یادداشت خود را بنویسید...`}
        />
        <div
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() => navigate(`/dashboard/myFarmer/${item?.farmerCode}`)}
        >
          <Typography color="#009EF7" weight="bold" size="12px">
            مشاهده جزییات
          </Typography>
        </div>
      </CardRights>
      <CardLeft>
        <Img src={bg} />
        <Typography space=".3rem" size="10px" weight="bold">
          <GoLocation style={{ fontWeight: "bold" }} size={13} />
          {`${item?.province} ${item.city}`}{" "}
        </Typography>
      </CardLeft>
    </CardStyle>
  );
};

export default Card;
