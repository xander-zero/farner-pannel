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
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus, AiOutlinePicture } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletedImage, updatedCarrier } from "../../redux/action/farmer";

const EditImageCarrier = ({
  title,
  headTitle,
  show,
  setShowModal,
  images,
  setImage,
  sid,
  from
}) => {
  let file = null;
  const dispatch = useDispatch();
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (event) => {

    if (from === "addCareer") {
      const chosenFiles = Array.prototype.slice.call(event.target.files);
      images.push(...chosenFiles)
      setImage(images)
      handleClose()
    } else {
      file = event.target.files[0];
      window.confirm("فایل مورد نظر در سرور بارگذاری شود؟") === true && handleSubmit()
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("images", file);
    dispatch(updatedCarrier(formData, sid));
  };

  const handleDeleteImage = (img) => {
    if (from === "addCareer") {
      setImage(images.filter(item => item.name !== img.name));
    } else {
      dispatch(deletedImage(img));
      handleClose();
    }
  };

  return (
    <>
      {/* {
          showImgUploadAndDeleteAlert && (
            window.confirm("فایل مورد نظر در سرور بارگذاری شود؟") === true && (handleSubmit())
          )
        } */}

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
                  multiple={from === "addCareer" ? true : false}
                />
                <Icon color="#E2E2E2">
                  <AiOutlinePicture color="black" size={80} />
                </Icon>
                <p style={{ backgroundColor: "#E2E2E2", textAlign: "center", color: "black" }}>افزودن تصویر</p>
              </InputFile>
            </WrapperImg>
            {from === "addCareer" ?
              images?.map((image, index) => (
                <WrapperImg key={index}>
                  <img src={URL.createObjectURL(image)} alt="bg" />
                  <Icon
                    color="#ffd0d0"
                    onClick={() => handleDeleteImage(image)}
                    style={{ width: "100%" }}
                  >
                    <AiOutlineDelete color="red" size={20} style={{ alignSelf: "flex-end" }} />
                  </Icon>
                </WrapperImg>
              ))
              :
              images?.map((image, index) => (
                <WrapperImg key={index}>
                  <img src={image?.link} alt="bg" />
                  <Icon
                    color="#ffd0d0"
                    onClick={() => handleDeleteImage(image?.id)}
                    style={{ width: "100%" }}
                  >
                    <AiOutlineDelete color="red" size={20} style={{ alignSelf: "flex-end" }} />
                  </Icon>
                </WrapperImg>
              ))
            }
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
