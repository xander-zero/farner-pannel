import { Fragment, useState } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { addInformation } from "../../redux/action/farmer";

// components
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { LeftRow, Right, Left, InputField, Label, TextArea } from "../RecordProfession/style/recordProfession"
import Typography from "../../components/Typography/Typography";
import { Fade } from "react-slideshow-image";
// helper
import { userData } from "../../help/userData";

// styled components
import {
  FormGroup,
  InfoStyle,
  InfoWrapper,
  InputFile,
  Input,
  Title,
} from "./myInformationStyle";
import styled from "styled-components";
import { TitleVideoWrapper, CustomInput, CustomTextArea, CustomLabel } from "../UploadVideoPage/UploadVideoPage";
import { HeaderTitle } from "../../theme/GlobalStyle";

// images
import cloud from "../../assets/images/cloud-upload-regular-240.png";
import { EachFade, ImageContainer, SlideContainer } from "../RecordProfession/style/recordProfession";
import EditImageCarrier from "../../components/Modals/EditImageCarrier";

// IMG CROP
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import 'antd/dist/antd.css';
import 'antd/es/modal/style';
import 'antd/es/slider/style';


const MyInformation = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const userInformation = userData();
  const expertCode = userInformation?.data?.result?.expert?.expertCode;

  // farmer selector
  const expertSelector = useSelector((state) => state.myFarmer);
  const { loadingSendInfo } = expertSelector;

  const [showModal, setShowModal] = useState(false);

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: false,
    easing: "ease",
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
  };

  const handleChange = (event) => {
    const { type, value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const getSrcFromFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  };


  const onPreview = async (file) => {
    const src = file.url || (await getSrcFromFile(file));
    const imgWindow = window.open(src);

    if (imgWindow) {
      const image = new Image();
      image.src = src;
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
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
    formData.append("title", form.title);
    formData.append("content", form.content);

    images.map(image => formData.append("images", image))
    dispatch(addInformation(formData));
    resetForm();
  };

  return (
    <Fragment>
      <HeaderTitle style={{ marginTop: "1rem" }}>
        ثبت حرفه و مهارت های من
      </HeaderTitle>
      <Row>
        <Right>
          <SlideContainer>
            {images.length > 0 ?
              <Fade {...properties}>
                {images?.map((img, index) => {
                  console.log(images);
                  return (
                    <EachFade key={index}>
                      <ImageContainer
                        onClick={() => {
                          setShowModal(true);
                        }}>

                        <ImgCrop grid rotate
                          aspect={16 / 9}
                          modalOk='برش بده'
                          modalCancel='انصراف'
                          rotate={true}
                          modalTitle='برش عکس'
                        >
                          <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={images}
                            onChange={handleChange}
                            onPreview={onPreview}
                          >
                            {/* {fileList.length < 3 && '+ Upload'} */} آپلود تصویر+
                          </Upload>
                        </ImgCrop>
                        {/* <img src={URL.createObjectURL(img)} width="280px" height="270px" object-fit="cover" /> */}
                      </ImageContainer>
                    </EachFade>
                  );
                })
                }
              </Fade> : <img className="image-slider" src={cloud} alt="cloud" style={{ width: "280px", height: "270px" }} onClick={() => {
                setShowModal(true);
              }} />}
          </SlideContainer>

          {showModal && (
            <EditImageCarrier
              setShowModal={setShowModal}
              show={showModal}
              title="مدیریت تصاویر"
              headTitle="مدیریت تصاویر"
              setImage={setImages}
              images={images}
              from="addCareer"
            />
          )}
        </Right>

        <Left>
          <LeftRow height="15%">
            <Label>عنوان:</Label>
            <InputField
              onChange={handleChange}
              defaultValue={form?.title}
              name="title"
            />
          </LeftRow>
          <LeftRow height="65%">
            <Label>توضیحات:</Label>
            <TextArea
              onChange={handleChange}
              defaultValue={form.content}
              name="content"
            />
          </LeftRow>
          <LeftRow height="20%" justify="flex-end">
            <Button small size="14px" onClick={handleSubmit}>
              {loadingSendInfo ? (
                <Typography color="#fff" size="10px">
                  <Loading />
                </Typography>
              ) : (
                "ثبت"
              )}
            </Button>
          </LeftRow>
        </Left>
      </Row>
    </Fragment>
  );
};

export const Row = styled.div`
display: flex;
flex-direction: row;
height: 300px;
padding: 1rem;
background-color: white;
border-radius: 1rem
`

export default MyInformation;

