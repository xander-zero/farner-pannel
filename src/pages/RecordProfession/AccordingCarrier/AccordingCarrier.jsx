// react bootstrap
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../../components/Button/Button";
import EditImageCarrier from "../../../components/Modals/EditImageCarrier";
import {
  Content,
  FormGroup,
  Title,
  WrapperBtn,
  Row,
  Right,
  SlideContainer,
  EachFade,
  InputField,
  Label,
  ImageContainer,
  Left, 
  LeftRow,
  TextArea
} from "../style/recordProfession";
import { Fade } from "react-slideshow-image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedCarrier, updatedCarrier } from "../../../redux/action/farmer";
import Typography from "../../../components/Typography/Typography";
import Loading from "../../../components/Loading/Loading";

const AccordingCarrier = ({ carrier, id }) => {

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { loadingUpdateCarrier } = farmerSelector;
  const { loadingDeleteCarrier } = farmerSelector;
  const [showModal, setShowModal] = useState(false);
  const [sid, setSid] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    content: "",
    images: null
  });

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
    console.log("form", form);
      setForm({ ...form, [name]: value });
  };

  const handleClick = (carrier) => {
    let formData = new FormData(); 
    formData.append('title', form.title)
    formData.append('content', form.content)
    formData.append('images', null)
    dispatch(updatedCarrier(formData, carrier?.sid));
  };
 
  const handleDelete = (sid) => {
    dispatch(deletedCarrier(sid));
  };

  useEffect(() => {
    setForm({
      ...form,
      title: carrier?.title,
      content: carrier?.content
      });
  }, [carrier]);

  return (
    <Accordion.Item key={carrier?.sid} eventKey={id}>
      <Accordion.Header>عنوان: {carrier?.title} </Accordion.Header>
      <Accordion.Body>
        <Row>
          <Right>
            <SlideContainer>
              <Fade {...properties}>
                {carrier?.images?.map((image, index) => {
                  return (
                    <EachFade key={index}>
                      <ImageContainer
                        onClick={() => {
                          setShowModal(true);
                          setSid(carrier?.sid);
                        }}>
                        <img src={image?.link} width="280px" height="270px" object-fit="cover" />
                      </ImageContainer>
                    </EachFade>
                  );
                })}
              </Fade>
              {showModal && (
                <EditImageCarrier
                  setShowModal={setShowModal}
                  show={showModal}
                  title="مدیریت تصاویر"
                  headTitle="مدیریت تصاویر"
                  images={carrier?.images}
                  sid={sid}
                  from="myCareer"
                />
              )}
            </SlideContainer>
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
              <Button small size="14px" onClick={() => handleClick(carrier)}>
                {loadingUpdateCarrier ? (
                  <Typography color="#fff" size="10px">
                    <Loading />
                  </Typography>
                ) : (
                  "اعمال تغییرات"
                )}
              </Button>
              <Button small size="14px" color="red" onClick={() => handleDelete(carrier?.sid)}>
              {loadingDeleteCarrier ? (
                  <Typography color="#fff" size="10px">
                    <Loading />
                  </Typography>
                ) : (
                  "حذف"
                )}
              </Button>
            </LeftRow>
          </Left>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordingCarrier;
