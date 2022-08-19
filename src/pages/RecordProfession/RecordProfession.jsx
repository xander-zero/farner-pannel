import { useState } from "react";
// react redux
import { useDispatch } from "react-redux";

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
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import EditImageCarrier from "../../components/Modals/EditImageCarrier";
import { useEffect } from "react";
import { getAllCarriers } from "../../service/myFarmer";
import { allCarriers } from "../../redux/action/farmer";

const RecordProfession = () => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = () => {};
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const fadeImages = [1, 2, 3, 4, 5];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: false,
    easing: "ease",
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
  };

  useEffect(() => {
    dispatch(allCarriers());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>حرفه ها و مهارت های من</HeaderTitle>
      <div className="mt-2">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>عنوان : نمیدونم </Accordion.Header>
            <Accordion.Body>
              <div className="row">
                <div className="col-4">
                  <div className="slide-container">
                    <Fade {...properties}>
                      {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                          <div
                            className="image-container"
                            onClick={() => setShowModal(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <img src={bg} width="100%" height="100%" />
                          </div>
                        </div>
                      ))}
                    </Fade>
                    {showModal && (
                      <EditImageCarrier
                        setShowModal={setShowModal}
                        show={showModal}
                        title="ویرایش"
                        headTitle="ویرایش"
                      />
                    )}
                  </div>
                </div>
                <div className="col-8">
                  <Content>
                    <InputFeild type="text" value="محمود" label="عنوان" />
                    <FormGroup>
                      <Title>توضیحات</Title>
                      <TextArea></TextArea>
                    </FormGroup>
                    <WrapperBtn>
                      <Button small size="14px">
                        اعمال تفییرات
                      </Button>
                      <div className="mx-1">
                        <Button small size="14px" color="red">
                          حذف
                        </Button>
                      </div>
                    </WrapperBtn>
                  </Content>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
};

export default RecordProfession;
