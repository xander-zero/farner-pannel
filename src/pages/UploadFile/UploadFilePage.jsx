import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import DragDropFile from "../../components/DragDropFile/DragDropFile";
import InputFeild from "../../components/InputFeild/InputFeild";
import Loading from "../../components/Loading/Loading";
import Select from "../../components/Select/Select";
import TagGenerator from "../../components/TagGenerator/TagGenerator";
import TextArea from "../../components/TextArea/TextArea";
import Typography from "../../components/Typography/Typography";
import { userData } from "../../help/userData";
import { sendFileContent } from "../../redux/action/farmer";
import { getAllProducts } from "../../redux/action/general";
import { Container } from "../../theme/GlobalStyle";
import { errorMessage } from "../../utils/message";
import { CustomLabel, CustomSelect, CustomTextArea, CustomInput, TitleVideoWrapper } from "../UploadVideoPage/UploadVideoPage";
import {
  Label,
  Left,
  Right,
  Wrapper,
} from "../UploadVideoPage/uploadVideoStyle";

const UploadFilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInformation = userData();
  const expertCodeData = userInformation?.data?.result ?.expert?.expertCode;
  const [tags, setTags] = useState([]);
  const [mainContent, setMainContent] = useState(null);
  const [featuredImage, setFeaturedImage] = useState([]);
  const [otherImages, setOtherImages] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", contentCategory: "", keyWords: [], files: null, });


  const generalSelector = useSelector((state) => state.general);
  const { products } = generalSelector;

  const productFormat = products?.map((product) => ({
    label: product.persianName,
    value: product?.persianName,
  }));

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { loadingFile } = farmerSelector;

  const onOtherImages = (files) => {

    var date = new Date();
    var newFile = files[(files.length - 1)];
    let modeFile = "";

    if (newFile.type === "image/jpeg") {modeFile = "jpeg";} 
    else if (newFile.type === "image/png") {modeFile = "png";} 
    else {
      errorMessage("فایل انتخاب شده صحیح نمی باشد");
      return false;
    }

    var blob = newFile.slice(0, newFile.size, `image${date}/${modeFile}`);
    newFile = new File([blob], `otherImages${date}.${modeFile}`, {type: `image/${modeFile}`,});
    setOtherImages([...otherImages, newFile]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("contentCategory", form.contentCategory);
    formData.append("keyWords", tags.join(","));
    formData.append("expertCode", expertCodeData);
    formData.append("files", featuredImage);
    formData.append("files", mainContent);
    // const newFileList = [fileList[0], ...imageList, certainFile[0]];
    for (let i = 0; i < otherImages?.length; i++) {
      formData.append(`files`, otherImages[i]);
    }

    dispatch(sendFileContent(formData, navigate));
    setForm({
      title: "",
      description: "",
      contentCategory: "",
      keyWords: [],
      files: null,
    });
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // console.log("fileList[0]", certainFile);

  return (
    <Container>
      <Typography size="20px" weight="bold">
        بارگذاری مطلب
      </Typography>
      <Wrapper>
        <Right>

          <TitleVideoWrapper>
            <CustomLabel>عنوان</CustomLabel>
            <CustomInput onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="عنوان" />
            <CustomLabel>توضیحات</CustomLabel>
            <CustomTextArea onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="توضیحات" />
          </TitleVideoWrapper>

          <TitleVideoWrapper>
            <CustomLabel>دسته بندی مطالب</CustomLabel>
            <CustomSelect onChange={(e) => setForm({ ...form, contentCategory: e.target.value })}>
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
            {loadingFile ? <Loading /> : "ارسال"}
          </Button>
          
        </Right>

        <Left>
          {/* <VideoInput type=".pdf" titleFile="مطلب مورد نظر را انتخاب کنید" /> */}
          <DragDropFile
            title="بارگذاری مطلب"
            type=".docx"
            mainContent={mainContent}
            setMainContent={setMainContent}
            fileType = "content"

          />
          <DragDropFile
            title="بارگذاری تصویر شاخص"
            featuredImage={featuredImage}
            setFeaturedImage={setFeaturedImage}
            fileType = "featuredImage"
          />
          <DragDropFile
            title="بارگذاری سایر تصاویر"
            onFileChange={(files) => onOtherImages(files)}
            otherImages={otherImages}
            setOtherImages={setOtherImages}
            fileType = "otherImages"
          />
        </Left>
      </Wrapper>
    </Container>
  );
};
export default UploadFilePage;
