import Button from "../../components/Button/Button";
import DragDropFile from "../../components/DragDropFile/DragDropFile";
import InputFeild from "../../components/InputFeild/InputFeild";
import Select from "../../components/Select/Select";
import TextArea from "../../components/TextArea/TextArea";
import Typography from "../../components/Typography/Typography";
import { Container } from "../../theme/GlobalStyle";
import {
  Label,
  Left,
  Right,
  Wrapper,
} from "../UploadVideoPage/uploadVideoStyle";
import VideoInput from "../UploadVideoPage/VideoInput";

const UploadFilePage = () => {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <Container>
      <Typography size="20px" weight="bold">
        بارگذاری ویدیو
      </Typography>
      <Wrapper>
        <Right>
          <InputFeild label="عنوان مطلب" placeholder="عنوان" />
          <TextArea label="توضیحات" placeholder="توضیحات"></TextArea>
          <div className="select">
            <Label>مطلب بندی</Label>
            <Select items={[]} />
          </div>
          <InputFeild label="کلمات کلیدی" placeholder="کلمات کلیدی" />

          <Button small size="14px" weight="bold">
            ارسال
          </Button>
        </Right>
        <Left>
          <VideoInput type=".pdf" titleFile="مطلب مورد نظر را انتخاب کنید" />
          <DragDropFile
            title="کاور را انتخاب کنید"
            onFileChange={(files) => onFileChange(files)}
          />
        </Left>
      </Wrapper>
    </Container>
  );
};
export default UploadFilePage;
