import React, { useRef, useState } from "react";
import Typography from "../../components/Typography/Typography";
import { Row } from "./uploadVideoStyle";
import { Label } from "./videoInputStyle";
import uploadImg from "../../assets/images/cloud-upload-regular-240.png";

// import "../../components/DragDropFile/dragdropStyle.css";
import styled from "styled-components";

export default function VideoInput(props) {
  const { width, height } = props;

  const { source, setSource } = props;

  // const [source, setSource] = React.useState();
  const inputRef = props.inputRef;

  const [editVideo, setEditVideo] = useState(false)

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  console.log("source", inputRef?.current?.files[0]);
  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const editVideoHandler = () => {
    setEditVideo(true)
    console.log(editVideo);
  }

  return (
    <div className="VideoInput">
      <Label htmlFor="inputTag">
        <div style={{ cursor: "pointer" }} className="drop-file-input__label">

          {
            !source && (
              <>
                <img src={uploadImg} alt="" />
                <p>{props.titleFile}</p>
              </>
            )
          }
          <input
            id="inputTag"
            ref={inputRef}
            className="VideoInput_input"
            type="file"
            onChange={handleFileChange}
            accept={props.type}
          />

          {source && (
            <>
              <video
                className="VideoInput_video"
                width="100%"
                height={height}
                controls
                src={source}
              />
              {/* <button onClick={editVideoHandler}>تغییر ویدیو</button> */}
              <EditVideoDiv onClick={editVideoHandler}><p>تغییر ویدیو</p></EditVideoDiv>
            </>
            

          )}

          {/* <Typography weight="bold">{source || ""}</Typography> */}
        </div>

      </Label>
      {/* {!source && <button onClick={handleChoose}>Choose</button>} */}


    </div>
  );
}

const EditVideoDiv = styled.div`
  width: 100%;

  p{
    color: red;
  }
`