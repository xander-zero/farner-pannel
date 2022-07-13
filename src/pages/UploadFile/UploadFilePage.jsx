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
  const expertCodeData = userInformation?.data?.result?.expert?.expertCode;
  const [tags, setTags] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [certainFile, setCertainFile] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    contentCategory: "",
    keyWords: [],
    files: null,
  });
  const onFileChange = (files) => {
    // console.log(files);
  };

  const generalSelector = useSelector((state) => state.general);
  const { products } = generalSelector;

  const productFormat = products?.map((product) => ({
    label: product.persianName,
    value: product?.persianName,
  }));

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { loadingFile } = farmerSelector;

  const onCertailFile = (files) => {
    var newFile = files[0];

    let modeFile = "";

    if (newFile.type === "image/jpeg") {
      modeFile = "jpeg";
    } else if (newFile.type === "image/png") {
      modeFile = "png";
    } else {
      errorMessage("فایل انتخاب شده صحیح نمی باشد");
      return false;
    }

    var blob = newFile.slice(0, newFile.size, `image/${modeFile}`);
    newFile = new File([blob], `featuredImage.${modeFile}`, {
      type: `image/${modeFile}`,
    });
    setCertainFile([...certainFile, newFile]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("contentCategory", form.contentCategory);
    formData.append("keyWords", tags.join(","));
    formData.append("expertCode", expertCodeData);
    // formData.append("files", certainFile[0]);
    const newFileList = [fileList[0], ...imageList, certainFile[0]];
    console.log("newFileList", newFileList);
    for (let i = 0; i < newFileList?.length; i++) {
      formData.append(`files`, newFileList[i]);
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

  console.log("fileList[0]", certainFile);

  return (
    <Container>
      <Typography size="20px" weight="bold">
        بارگذاری ویدیو
      </Typography>
      <Wrapper>
        <Right>
          <InputFeild
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            label="عنوان"
            placeholder="عنوان"
            weight
          />
          <TextArea
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            label="توضیحات"
            placeholder="توضیحات"
          ></TextArea>
          <div className="select">
            <Label>مطلب بندی</Label>
            <Select
              onChange={(e) =>
                setForm({ ...form, contentCategory: e.target.value })
              }
              items={productFormat}
            />
          </div>
          <TagGenerator tags={tags} setTags={setTags} />

          <Button small size="14px" weight="bold" onClick={handleSubmit}>
            {loadingFile ? <Loading /> : "ارسال"}
          </Button>
        </Right>
        <Left>
          {/* <VideoInput type=".pdf" titleFile="مطلب مورد نظر را انتخاب کنید" /> */}
          <DragDropFile
            title="بارگذاری مطلب"
            type=".docx"
            onFileChange={(files) => onFileChange(files)}
            fileList={fileList}
            setFileList={setFileList}
          />
          <DragDropFile
            title="بارگذاری تصویر شاخص"
            onFileChange={(files) => onCertailFile(files)}
            fileList={certainFile}
            setFileList={setCertainFile}
          />
          <DragDropFile
            title="بارگذاری سایر تصاویر"
            onFileChange={(files) => onFileChange(files)}
            fileList={imageList}
            setFileList={setImageList}
          />
        </Left>
      </Wrapper>
    </Container>
  );
};
export default UploadFilePage;
