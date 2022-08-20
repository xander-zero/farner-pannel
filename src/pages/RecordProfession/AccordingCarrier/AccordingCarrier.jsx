// react bootstrap
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../../components/Button/Button";
import InputFeild from "../../../components/InputFeild/InputFeild";
import EditImageCarrier from "../../../components/Modals/EditImageCarrier";
import TextArea from "../../../components/TextArea/TextArea";
import {
  Content,
  FormGroup,
  Title,
  WrapperBtn,
} from "../style/recordProfession";
import { Fade } from "react-slideshow-image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatedCarrier } from "../../../redux/action/farmer";
import { HeaderTitle } from "../../../theme/GlobalStyle";
const AccordingCarrier = ({ carrier, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [sid, setSid] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    content: "",
    images: null,
  });

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

  const handleChange = (event) => {
    const { type, value, name } = event.target;

    if (type === "file") {
      setForm({ ...form, images: event?.target?.files[0] });
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      setImage(objectUrl);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleClick = (carrier) => {
    dispatch(updatedCarrier(form, carrier?.sid));
  };
  console.log("after click form Hello", form);

  useEffect(() => {
    setForm({
      ...form,
      title: carrier?.title,
      content: carrier?.content,
      images: carrier?.images[0],
    });
  }, [carrier]);

  return (
    <Accordion.Item key={carrier?.sid} eventKey={id}>
      <Accordion.Header>عنوان : {carrier?.title} </Accordion.Header>
      <Accordion.Body>
        <div className="row">
          <div className="col-4">
            <div className="slide-container">
              <Fade {...properties}>
                {carrier?.images?.map((image, index) => {
                  return (
                    <div className="each-fade" key={index}>
                      <div
                        className="image-container"
                        onClick={() => {
                          setShowModal(true);
                          setSid(carrier?.sid);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={image?.link} width="100%" height="100%" />
                      </div>
                    </div>
                  );
                })}
              </Fade>
              {showModal && (
                <EditImageCarrier
                  setShowModal={setShowModal}
                  show={showModal}
                  title="ویرایش"
                  headTitle="ویرایش"
                  images={carrier?.images}
                  sid={sid}
                />
              )}
            </div>
          </div>
          <div className="col-8">
            <Content>
              <InputFeild
                type="text"
                label="عنوان"
                name="title"
                onChange={handleChange}
                value={form?.title}
              />
              <FormGroup>
                <Title>توضیحات</Title>
                <TextArea
                  name="content"
                  onChange={handleChange}
                  value={form.content}
                ></TextArea>
              </FormGroup>
              <WrapperBtn>
                <Button small size="14px" onClick={() => handleClick(carrier)}>
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
  );
};

export default AccordingCarrier;
