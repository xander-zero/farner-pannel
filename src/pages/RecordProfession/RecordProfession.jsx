import { useState } from "react";
// react redux
import { useDispatch, useSelector } from "react-redux";

// react bootstrap
import Accordion from "react-bootstrap/Accordion";

// styled components
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import { Input, Label } from "../MyInformation/myInformationStyle";

// css
import "./style/style.css";

// images
import bg from "../../assets/images/expert.png";
import cloud from "../../assets/images/cloud-upload-regular-240.png";
import {
  Content,
  FormGroup,
  InputFile,
  Title,
  Wrapper,
  WrapperBtn,
} from "./style/recordProfession";
import InputFeild from "../../components/InputFeild/InputFeild";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";

import "react-slideshow-image/dist/styles.css";
import EditImageCarrier from "../../components/Modals/EditImageCarrier";
import { useEffect } from "react";
import { getAllCarriers } from "../../service/myFarmer";
import { allCarriers } from "../../redux/action/farmer";
import AccordingCarrier from "./AccordingCarrier/AccordingCarrier";

const RecordProfession = () => {
  const dispatch = useDispatch();
  const fadeImages = [1, 2, 3, 4, 5];

  const expertSelector = useSelector((state) => state.myFarmer);
  const { carriers } = expertSelector;

  useEffect(() => {
    dispatch(allCarriers());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>حرفه ها و مهارت های من</HeaderTitle>
      <div className="mt-2">
        <Accordion>
          {carriers?.map((carrier, index) => (
            <AccordingCarrier carrier={carrier} key={index} id={index} />
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default RecordProfession;
