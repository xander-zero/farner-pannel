import DragDropFile from "../../components/DragDropFile/DragDropFile";
import Typography from "../../components/Typography/Typography";
import { Container } from "../../theme/GlobalStyle";
import { Label, Left, Right, Wrapper } from "./uploadVideoStyle";
import InputFeild from "../../components/InputFeild/InputFeild";
import Select from "../../components/Select/Select";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import VideoInput from "./VideoInput";
import { useEffect, useRef, useState } from "react";
import TagGenerator from "../../components/TagGenerator/TagGenerator";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/general";
import { userData } from "../../help/userData";
import { sendVideoContent } from "../../redux/action/farmer";
import Loading from "../../components/Loading/Loading";

const UploadVideoPage = () => {
  const initialValue = [
    {
      id: "1",
      label: "انتخاب کنید",
      value: "",
    },
    {
      id: "2",
      label: "آموزشی",
      value: "آموزشی",
    },
    {
      id: "2",
      label: "تجربه کشاورز",
      value: "تجربه کشاورز",
    },
  ];

  const [fileList, setFileList] = useState([]);
  const [tags, setTags] = useState([]);
  const [source, setSource] = useState(null);
  const [form, setForm] = useState({
    title: "",
    video: null,
    cover: "",
    description: "",
    type: "",
    pid: "",
    category: "",
    keyWords: [],
  });
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onFileChange = (files) => {
    console.log("sources", files);
  };

  const onVideoChange = (files) => {
    console.log(files);
  };

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { loading } = farmerSelector;

  const generalSelector = useSelector((state) => state.general);
  const { products } = generalSelector;

  const productFormat = products?.map((product) => ({
    label: product.persianName,
    value: product?.pid,
  }));

  const userInformation = userData();
  const expertCodeData = userInformation?.data?.result?.expert?.expertCode;
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("video", inputRef ? inputRef?.current?.files[0] : null);
    formData.append("type", "آموزشی");
    formData.append("category", form.category);
    formData.append("cover", fileList[0] ? fileList[0] : null);
    formData.append("keyWords", tags?.join(","));
    formData.append("expertCode", expertCodeData);

    dispatch(sendVideoContent(formData));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="20px" weight="bold">
        بارگذاری ویدیو
      </Typography>
      <Wrapper>
        <Right>
          <InputFeild
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            label="ارسال عنوان ویدیو"
            placeholder="عنوان"
          />
          <TextArea
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            label="توضیحات ویدیو"
            placeholder="توضیحات"
          ></TextArea>
          <div className="select">
            <Label>نوع ویدیو</Label>
            <Select
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              items={initialValue}
            />
          </div>
          <div className="select">
            <Label>دسته بندی ویدیو</Label>
            <Select
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              items={productFormat}
            />
          </div>
          <TagGenerator tags={tags} setTags={setTags} />
          <Button small size="14px" weight="bold" onClick={handleSubmit}>
            {loading ? (
              <Typography color="#fff" size="10px">
                <Loading />
              </Typography>
            ) : (
              "ارسال"
            )}
          </Button>
        </Right>
        <Left>
          <VideoInput
            titleFile="ویدیو شاخص را انتخاب کنید"
            onFileChange={(files) => onFileChange(files)}
            type=".mov,.mp4"
            setSource={setSource}
            source={source}
            inputRef={inputRef}
          />
          <DragDropFile
            title="کاور را انتخاب کنید"
            onFileChange={(files) => onVideoChange(files)}
            fileList={fileList}
            setFileList={setFileList}
          />
        </Left>
      </Wrapper>
    </Container>
  );
};

export default UploadVideoPage;
