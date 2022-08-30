import React, { useState } from "react";

// react router dom
import { useNavigate } from "react-router-dom";

import { AiOutlineFile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
// components
import Typography from "../Typography/Typography";
import InputFeild from "../InputFeild/InputFeild";

// style
import styled from "styled-components";

import { CardLeft, CardRights, CardStyle, Icon, Img } from "./cardStyle";
import { Row } from "../../theme/GlobalStyle";
// image farmer
import bg from "../../assets/images/ibrahima-toure-GAepqKfzZFI-unsplash.jpg";
import TextArea from "../TextArea/TextArea";
import { addCommentToFarmer, addStarToFarmer } from "../../redux/action/farmer";
import { userData } from "../../help/userData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// icons
import { AiOutlineStar } from 'react-icons/ai';

//svg star
import star from "../../assets/images/starSvg.svg";

const Card = ({ item, icon }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [marked, setMarked] = useState(false);

  const dispatch = useDispatch();

  const userInformation = userData();
  const expertCode = userInformation?.data?.result?.expert?.expertCode;
  const starToFarmer = useSelector(state => state.myFarmer);

  const sendCommentToServer = (farmerCode) => {
    const data = {
      commnet: comment
    };
    dispatch(addCommentToFarmer(data, farmerCode, expertCode));
  };

  useEffect(() => {
    if (item?.comment) {
      setComment(item?.comment);
    }
  }, [item?.comment]);

  const starRateHandler = (farmerCode) => {
    const data = {
      marked: !marked
    };
    dispatch(addStarToFarmer(data, farmerCode, expertCode))
    setMarked(!marked)
  }

  return (

    <CardStyle>
      <CardRights>
        <div onClick={() => navigate(`/dashboard/myFarmer/${item?.farmerCode}`)}>
          <Row>
            <Typography weight="bold" size="18px">
              {item?.fullName}
            </Typography>
            <Icon>
              <a href={`tel:${item?.phoneNumber}`}>
                <FiPhoneCall size={20} color="#fff" />
              </a>
            </Icon>
          </Row>
        </div>
        <Typography size="12px">
          <AiOutlineFile /> {item?.mealPlanCount} برنامه غذایی
        </Typography>
        <TextArea
          value={comment}
          small
          icon={icon}
          type="text"
          placeholder={`یادداشت خود را بنویسید...`}
          
          onBlur={() => sendCommentToServer(item?.farmerCode)}
          onChange={(event) => setComment(event.target.value)}
        />
        {/* <div
          style={{ marginTop: "5px", cursor: "pointer" }}
          onClick={() => navigate(`/dashboard/myFarmer/${item?.farmerCode}`)}
        >
          <Typography color="#009EF7" weight="bold" size="12px">
            مشاهده جزییات
          </Typography>
        </div> */}
      </CardRights>

      <CardLeft>
        <Img src={item?.avatarUrl} />
        <StarSpan onClick={() => starRateHandler(item?.farmerCode)} star={marked} ><img src={star} alt="" /></StarSpan>
        <Location>
          <GoLocation style={{ fontWeight: "bold" }} size={13} />
          {`${item?.province} ${item.city}`}{" "}
        </Location>
      </CardLeft>
    </CardStyle>

  );
};

const Location = styled.p`
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 1;
    bottom: 0;
    font-size: 11px;
    font-weight: bold;
    margin: 0;
    background: rgba(255, 255, 255, 0.9);
    color: #808080;
    border-bottom-left-radius : 30px;
    border-bottom-right-radius : 30px;
`

const StarSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 25px;
    filter:${({ star }) => star ? "invert(91%) sepia(18%) saturate(6565%) hue-rotate(360deg) brightness(106%) contrast(103%)" : ""};
  }

`

export default Card;
