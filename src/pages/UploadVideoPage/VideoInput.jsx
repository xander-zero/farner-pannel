import React from "react";
import Typography from "../../components/Typography/Typography";
import { Row } from "./uploadVideoStyle";
import { Label } from "./videoInputStyle";
import uploadImg from "../../assets/images/cloud-upload-regular-240.png";

export default function VideoInput(props) {
  const { width, height } = props;

  const { source, setSource } = props;

  // const [source, setSource] = React.useState();
  const inputRef = props.inputRef;
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

  return (
    <div className="VideoInput">
      <Row>
        <Typography weight="bold">{props.titleFile}</Typography>
      </Row>
      <Label htmlFor="inputTag">
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>{props.title}</p>
        </div>
        <input
          id="inputTag"
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept={props.type}
        />
      </Label>
      {/* {!source && <button onClick={handleChoose}>Choose</button>} */}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      <Typography weight="bold">{source || ""}</Typography>
    </div>
  );
}
