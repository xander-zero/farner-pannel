import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./dragdropStyle.css";

import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/images/cloud-upload-regular-240.png";
import styled from "styled-components";
import Typography from "../Typography/Typography";

const DragDropFile = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>فایل خود را اینجا بکشید</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          {fileList.map((item, index) => (
            <DropFile key={index} className="drop-file-preview__item">
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <Typography>{item.name}</Typography>
                <Typography>{item.size}B</Typography>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </DropFile>
          ))}
        </div>
      ) : null}
    </>
  );
};

const DropFile = styled.div`
  background-color: ${({ theme }) => theme.body};
  margin: 1rem;
`;

DragDropFile.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragDropFile;
