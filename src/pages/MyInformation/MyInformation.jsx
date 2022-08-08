import InputFeild from "../../components/InputFeild/InputFeild";
import bg from "../../assets/images/expert.png";
import cloud from "../../assets/images/cloud-upload-regular-240.png";

import {
  FormGroup,
  InfoStyle,
  InfoWrapper,
  Input,
  InputFile,
  Label,
  Title,
} from "./myInformationStyle";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { HeaderTitle } from "../../theme/GlobalStyle";
import { Fragment } from "react";

const MyInformation = () => {
  return (
    <Fragment>
      <HeaderTitle style={{ marginTop: "1rem" }}>اطلاعات من</HeaderTitle>
      <InfoStyle>
        <InfoWrapper>
          <InputFile>
            <Input type="file" name="file" id="file" class="inputfile" />
            <Label for="file">
              <img src={bg} alt="profile" />
            </Label>
            <img className="image-slider" src={cloud} alt="cloud" />
          </InputFile>
          <InputFeild label="عنوان" type="text" />
        </InfoWrapper>
        <FormGroup>
          <Title>متن اصلی</Title>
          <TextArea></TextArea>
        </FormGroup>
        <Button small size="12px">
          تایید
        </Button>
      </InfoStyle>
    </Fragment>
  );
};

export default MyInformation;
