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

// style components
import styled from "styled-components"; 
 
const UploadVideoPage = () => { 
  const initialValue = [
    {
      id: "1",
      label: "آموزشی",
      value: "آموزشی",
    },
    {
      id: "2",
      label: "تجربه کشاورز",
      value: "تجربه کشاورز",
    },
  ];

  // const [cover, setCover] = useState(null);
  const [cover, setCover] = useState([]);
  const [tags, setTags] = useState([]);
  const [source, setSource] = useState(null);
  const [form, setForm] = useState({ title: "", video: null, cover: "", description: "", type: "", pid: "", category: "", keyWords: [] });
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onFileChange = (files) => {
    console.log("sources", files);
  };

  const onVideoChange = (files) => {
    console.log(files);
  };

  // console.log("fileList[0]", fileList[0]);

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { loadingVideo } = farmerSelector;

  const generalSelector = useSelector((state) => state.general);
  const { products } = generalSelector;

  const productFormat = products?.map((product) => ({
    label: product.persianName,
    value: product?.persianName,
  }));

  const userInformation = userData();
  const expertCodeData = userInformation?.data?.result?.expert?.expertCode;
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("video", inputRef ? inputRef?.current?.files[0] : null);
    formData.append("type", form.type);
    formData.append("category", form.category);
    formData.append("cover", cover.length > 0 ? cover[0].originFileObj : null);
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

          <TitleVideoWrapper>
            <CustomLabel>عنوان ویدیو</CustomLabel>
            <CustomInput onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="مثال: راهکارهای خندان شدن پسته" />
            <CustomLabel>توضیحات ویدیو</CustomLabel>
            <CustomTextArea onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="توضیحات ویدیو..." />
          </TitleVideoWrapper>

          <TitleVideoWrapper>
            <CustomLabel>نوع ویدیو</CustomLabel>
            <CustomSelect onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="" selected={"انتخاب کنید"}>
                انتخاب کنید
              </option>
              {
                initialValue.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))
              }
            </CustomSelect>

            <CustomLabel>دسته بندی ویدیو</CustomLabel>
            <CustomSelect onChange={(e) => setForm({ ...form, category: e.target.value })} >
              <option value="" selected={"انتخاب کنید"}>
                انتخاب کنید
              </option>
              {
                productFormat.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))
              }
            </CustomSelect>

          </TitleVideoWrapper>

          <TitleVideoWrapper>
            <CustomLabel>کلمات کلیدی</CustomLabel>
            <TagGenerator tags={tags} setTags={setTags} />
          </TitleVideoWrapper>

          <Button small size="14px" weight="bold" onClick={handleSubmit}>
            {loadingVideo ? (
              <Typography color="#fff" size="10px">
                <Loading />
              </Typography>
            ) : (
              "ارسال"
            )}
          </Button>
        </Right>

        <Left>
          <VideoInput titleFile="ویدیو را انتخاب کنید" onFileChange={(files) => onFileChange(files)} type=".mov,.mp4" setSource={setSource} source={source} inputRef={inputRef}/>
          <DragDropFile title="کاور را انتخاب کنید" onFileChange={(files) => onVideoChange(files)} cover={cover} setCover={setCover} fileType = "cover"/>
        </Left>
      </Wrapper>
    </Container>
  );
}; 
const WrapperVideo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 1.2rem;
  width: 100%;

`

export const TitleVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: flex-start; */
  gap: 0.5rem;
  margin-bottom: 1rem;
  /* background-color: red; */
`

export const CustomLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`


export const CustomInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  border: 1px solid #c8cccf;
  border-radius: 5px;
  outline: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundSidebar};
  margin-bottom: 0.5rem;

  &::placeholder {
    font-size: 0.8rem;
  }
`

export const CustomTextArea = styled.textarea`
  width: 100%;
  -webkit-appearance: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0.5rem 0 1.1rem;
  font-family: "IRAN";
  font-size: 10px;
  background: #F2F2F2;
  box-shadow: inset 4px 4px 15px -9px rgba(79, 79, 79, 0.25);
  border-radius: 10px;
  height: 68px;
  margin-bottom: 0.5rem;

  &::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  }
`

export const CustomSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  outline: none;
  font-family: "IRAN";
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.5rem;

`

export default UploadVideoPage;
