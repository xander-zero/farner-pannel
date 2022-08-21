import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  Icon,
  Input,
  InputFile,
  Label,
  WrapperCard,
  WrapperImg,
} from "./style/modalStyle";
// images
import bg from "../../assets/images/expert.png";
import cloud from "../../assets/images/cloud-upload-regular-240.png";
import Typography from "../Typography/Typography";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletedImage, updatedCarrier } from "../../redux/action/farmer";

const EditImageCarrier = ({
  title,
  headTitle,
  show,
  setShowModal,
  images,
  sid,
}) => {
  // const imageList = [1, 2, 3, 4, 5];
  //   const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("images", file);
    dispatch(updatedCarrier(formData, sid));
  };

  const handleDeleteImage = (id) => {
    dispatch(deletedImage(id));
    handleClose();
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        {title}
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{headTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WrapperCard>
            <WrapperImg>
              <InputFile>
                <Input
                  type="file"
                  name="image"
                  id="file"
                  className="inputfile"
                  onChange={handleChange}
                  multiple={true}
                />
                <Label htmlFor="file">
                  <img src={bg} alt="profile" />
                </Label>
                <Icon color="#D1F1F7">
                  <AiOutlinePlus color="#0d6efd" size={20} />
                </Icon>
                {/* <img className="image-slider" src={cloud} alt="cloud" /> */}
              </InputFile>
            </WrapperImg>
            {images?.map((image, index) => (
              <WrapperImg key={index}>
                <img src={image?.link} alt="bg" />
                <Icon
                  color="#ffd0d0"
                  onClick={() => handleDeleteImage(image?.id)}
                >
                  <AiOutlineDelete color="red" size={20} />
                </Icon>
              </WrapperImg>
            ))}
          </WrapperCard>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            منصرف شدم
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            تایید
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditImageCarrier;
