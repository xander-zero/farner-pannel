import DragDropFile from "../../components/DragDropFile/DragDropFile";
import Typography from "../../components/Typography/Typography";
import { Container } from "../../theme/GlobalStyle";
import { Label, Left, Right, Wrapper } from "./uploadVideoStyle";
import InputFeild from "../../components/InputFeild/InputFeild";
import Select from "../../components/Select/Select";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import VideoInput from "./VideoInput";

const UploadVideoPage = () => {
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
          <InputFeild label="ارسال عنوان ویدیو" placeholder="عنوان" />
          <TextArea label="توضیحات ویدیو" placeholder="توضیحات"></TextArea>
          <InputFeild label="کلمات کلیدی" placeholder="کلمات کلیدی" />
          <div className="select">
            <Label>دسته بندی ویدیو</Label>
            <Select items={[]} />
          </div>
          <div className="select">
            <Label>دسته بندی ویدیو</Label>
            <Select items={[]} />
          </div>
          <Button small size="14px" weight="bold">
            ارسال
          </Button>
        </Right>
        <Left>
          <VideoInput
            titleFile="ویدیو شاخص را انتخاب کنید"
            onFileChange={(files) => onFileChange(files)}
            type=".mov,.mp4"
          />
          <DragDropFile
            title="کاور را انتخاب کنید"
            onFileChange={(files) => onFileChange(files)}
          />
        </Left>
      </Wrapper>
    </Container>
  );
};

export default UploadVideoPage;
