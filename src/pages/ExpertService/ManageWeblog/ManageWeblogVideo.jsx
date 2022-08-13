import TableList from "../../../components/Table/Table";
import { Container, HeaderTitle } from "../../../theme/GlobalStyle";

const ManageWeblogVideo = () => {
  const headerTitle = ["عنوان", "دسته بندی", "تاریخ بارگذاری", "جزییات"];

  return (
    <Container>
      <HeaderTitle>محتوای ویدیویی</HeaderTitle>
      <TableList headerTitle={headerTitle} />
    </Container>
  );
};

export default ManageWeblogVideo;
