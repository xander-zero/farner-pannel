import { Fragment, useState } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { addInformation } from "../../redux/action/farmer";

// components
import InputFeild from "../../components/InputFeild/InputFeild";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import Loading from "../../components/Loading/Loading";

// helper
import { userData } from "../../help/userData";

// styled components
import {
  FormGroup,
  InfoStyle,
  InfoWrapper,
  Input,
  InputFile,
  Label,
  Title,
} from "./myInformationStyle";
import { HeaderTitle } from "../../theme/GlobalStyle";

// images
import cloud from "../../assets/images/cloud-upload-regular-240.png";
import bg from "../../assets/images/expert.png";

const MyInformation = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    image: null,
    title: "",
    content: "",
  });

  const userInformation = userData();
  const expertCode = userInformation?.data?.result?.expert?.expertCode;

  // farmer selector
  const expertSelector = useSelector((state) => state.myFarmer);
  const { loadingSendInfo } = expertSelector;

  const handleChange = (event) => {
    const { type, value, name } = event.target;
    if (type === "file") {
      setForm({ ...form, image: event.target.files[0] });
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      setImage(objectUrl);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      content: "",
    });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", form.image);
    formData.append("title", form.title);
    formData.append("content", form.content);
    formData.append("expertCode", expertCode);

    dispatch(addInformation(formData));
    resetForm();
  };

  return (
    <Fragment>
      <HeaderTitle style={{ marginTop: "1rem" }}>اطلاعات من</HeaderTitle>
      <InfoStyle>
        <InfoWrapper>
          <InputFile>
            <Input
              type="file"
              name="image"
              id="file"
              class="inputfile"
              onChange={handleChange}
            />
            <Label for="file">
              <img src={image || bg} alt="profile" />
            </Label>
            <img className="image-slider" src={cloud} alt="cloud" />
          </InputFile>
          <InputFeild
            label="عنوان"
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
        </InfoWrapper>
        <FormGroup>
          <Title>متن اصلی</Title>
          <TextArea
            name="content"
            value={form.content}
            onChange={handleChange}
          ></TextArea>
        </FormGroup>
        <Button small size="12px" onClick={handleSubmit}>
          {loadingSendInfo ? <Loading /> : "تایید"}
        </Button>
      </InfoStyle>
    </Fragment>
  );
};

export default MyInformation;
