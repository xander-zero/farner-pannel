import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
// style
import "./dragdropStyle.css";

// img
import uploadImg from "../../assets/images/cloud-upload-regular-240.png";

// style component
import styled from "styled-components";

// IMG CROP
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import 'antd/dist/antd.css';
import 'antd/es/modal/style';
import 'antd/es/slider/style';


const DragDropFile = (props) => {

  const wrapperRef = useRef(null);
  const { cover, setCover, mainContent, setMainContent, featuredImage, setFeaturedImage, otherImages, setOtherImages, fileType } = props;
  const [source, setSource] = useState();
  console.log("featuredImage", featuredImage);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");


  const onFileDrop = ({ fileList: newFileList }) => {
    // console.log("newFileList", newFileList);
    // setCover(newFileList)
    const newFile = newFileList;
    // const url = URL.createObjectURL(newFile[0]);
    // setSource(url);
    if (fileType === "cover") setCover(newFile);
    if (fileType === "content") setMainContent(newFile);
    // if (fileType === "featuredImage") {
    //   let modeFile = "";
    //   if (newFile.type === "image/jpeg") { modeFile = "jpeg"; }
    //   else if (newFile.type === "image/png") { modeFile = "png"; }
    //   else {
    //     return false;
    //   }

    //   var blob = newFile.slice(0, newFile.size, `image/${modeFile}`);
    //   const newFeaturedImageFile = new File([blob], `featuredImage.${modeFile}`, { type: `image/${modeFile}`, });
    //   setFeaturedImage(newFeaturedImageFile)
    // };

    if (fileType === "featuredImage") {
      setFeaturedImage(featuredImage)
    }

    if (newFile && fileType === "otherImages") {
      const updatedList = [...otherImages, newFile];
      setOtherImages(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const onContentDrop = (e) => {
    const newFile = e.target.files[0];
    const url = URL.createObjectURL(newFile);
    setSource(url);
    if (fileType === "cover") setCover(newFile);
    if (fileType === "content") setMainContent(newFile);
    if (fileType === "featuredImage") {

      let modeFile = "";

      if (newFile.type === "image/jpeg") { modeFile = "jpeg"; }
      else if (newFile.type === "image/png") { modeFile = "png"; }
      else {
        return false;
      }

      var blob = newFile.slice(0, newFile.size, `image/${modeFile}`);
      const newFeaturedImageFile = new File([blob], `featuredImage.${modeFile}`, { type: `image/${modeFile}`, });
      setFeaturedImage(newFeaturedImageFile)
    };
    if (newFile && fileType === "otherImages") {
      const updatedList = [...otherImages, newFile];
      setOtherImages(updatedList);
      props.onFileChange(updatedList);
    }
  }

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

  // const fileRemove = (file) => {
  //   const updatedList = [...fileList];
  //   updatedList.splice(fileList.indexOf(file), 1);
  //   setFileList(updatedList);
  //   props.onFileChange(updatedList);
  // };

  // console.log("source", source);
  // console.log("mainContent", mainContent);
  // console.log("otherImage", otherImages);
  // console.log("featuredImage", featuredImage);

  return (
    <>

      {

        // VIDEO COVER ALLAHDADI
        fileType === "cover" ?
          (
            <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
              <div className="drop-file-input__label">
                {
                  <ImgCrop grid rotate aspect={16 / 9} modalOk='برش بده' modalCancel='انصراف' rotate={true} modalTitle='برش عکس'>
                    <Upload maxCount='1' listType="picture-card" fileList={cover} onChange={onFileDrop} onPreview={onPreview}>کاور ویدیو+</Upload>
                  </ImgCrop>
                }
              </div>
            </div>
          ) :

          // FILE WORD ALLAHDADI
        fileType === "content" ?
          (
            <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
              <div className="drop-file-input__label">
                {
                  !mainContent ? (
                    <>
                      <img src={uploadImg} alt="" />
                      <p>{props.title}</p>
                    </>
                  ) : (
                    <div className="drop-file-preview">
                      <p>فایل با موفقیت بارگذاری شد</p>
                    </div>
                  )

                }
              </div>
              <input type="file" value="" onChange={onContentDrop} accept={props.type ? props.type : "image/png, image/gif, image/jpeg"} />
            </div>
          ) :

            // FEATURE IMAGE ALLAHDADI
        fileType === "featuredImage" ?
          (
            <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
              <div className="drop-file-input__label">
                {
                  <ImgCrop grid rotate aspect={16 / 9} modalOk='برش بده' modalCancel='انصراف' rotate={true} modalTitle='برش عکس'>
                    <Upload maxCount='1' listType="picture-card" fileList={featuredImage} onChange={onFileDrop} onPreview={onPreview}> تصویر شاخص+</Upload>
                  </ImgCrop>
                }
              </div>
            </div>
          ) :

            // OTHER IMAGE ALLAHDADI
          (
            <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
              <div className="drop-file-input__label">
                {
                  <ImgCrop grid rotate aspect={16 / 9} modalOk='برش بده' modalCancel='انصراف' rotate={true} modalTitle='برش عکس'>
                    <Upload maxCount='2' listType="picture-card" fileList={otherImages} onChange={onFileDrop} onPreview={onPreview}>سایر تصاویر+</Upload>
                  </ImgCrop>
                }
              </div>
            </div>
          )
      }



    </>
  );
};

const DropFile = styled.div`
  /* background-color: ${({ theme }) => theme.body}; */
  margin: 1rem;
`;

DragDropFile.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragDropFile;
