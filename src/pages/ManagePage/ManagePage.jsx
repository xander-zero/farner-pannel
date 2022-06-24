import React from "react";
import { Container, HeaderTitle } from "../../theme/GlobalStyle";
import uploadVideo from "../../assets/images/upload-video.webp";
import uploadFile from "../../assets/images/uploadFile.webp";

import { AiOutlineArrowDown } from "react-icons/ai";
import "./style.css";
import {
  Img,
  InputFile,
  Left,
  Right,
  Round,
  Upload,
  Wrapper,
} from "./managePageStyle";
import Typography from "../../components/Typography/Typography";
const ManagePage = () => {
  return (
    <Container>
      <HeaderTitle>مدیریت صفحه</HeaderTitle>
      <Wrapper>
        <Left>
          <Typography weight="bold" size="14px">
            بارگذاری ویدیو
          </Typography>
          <Upload>
            <Img src={uploadVideo} alt="" />
            <Round>
              <InputFile type="file" />
              <AiOutlineArrowDown size={20} color="#fff" />
            </Round>
          </Upload>
        </Left>
        <Right>
          <Typography weight="bold" size="14px">
            بارگذاری مطلب
          </Typography>
          <Upload>
            <Img src={uploadFile} alt="" />
            <Round>
              <InputFile type="file" />
              <AiOutlineArrowDown size={20} color="#fff" />
            </Round>
          </Upload>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ManagePage;
