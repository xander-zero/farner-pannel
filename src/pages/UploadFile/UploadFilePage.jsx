import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const userInformation = userData();
  const expertCodeData = userInformation?.data?.result?.expert?.expertCode;
  console.log(userInformation);
  const [tags, setTags] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [certainFile, setCertainFile] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    contentCategory: "آموزشی",
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
    value: product?.pid,
  }));

  const farmerSelector = useSelector((state) => state.myFarmer);
  const { loadingFile } = farmerSelector;

  const onCertailFile = (files) => {
    console.log("Hello");
    var newFile = files[0];

    let modeFile = "";

    console.log(newFile.type);

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
    formData.append("keyWords", tags.join(","));
    formData.append("expertCode", expertCodeData);

    const newFileList = [...fileList, ...imageList, ...certainFile];
    for (let i = 0; i < newFileList?.length; i++) {
      formData.append(`files[${i}]`, newFileList[i]);
    }

    dispatch(sendFileContent(formData));
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
            label="عنوان مطلب"
            placeholder="عنوان"
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
            title="مطلب مورد نظر را انتخاب کنید"
            type=".pdf"
            onFileChange={(files) => onFileChange(files)}
            fileList={fileList}
            setFileList={setFileList}
          />
          <DragDropFile
            title="تصویر شاخص را انتخاب کنید"
            onFileChange={(files) => onCertailFile(files)}
            fileList={certainFile}
            setFileList={setCertainFile}
          />
          <DragDropFile
            title="تصاویر مورد نظر را انتخاب کنید"
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
