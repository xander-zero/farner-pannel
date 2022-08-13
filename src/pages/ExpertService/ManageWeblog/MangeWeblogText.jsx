import TableList from "../../../components/Table/Table";
import { Container, HeaderTitle } from "../../../theme/GlobalStyle";

const ManageWeblogText = () => {
  const headerTitle = ["عنوان", "دسته بندی", "تاریخ بارگذاری", "جزییات"];

  return (
    <Container>
      <HeaderTitle>محتوای متنی</HeaderTitle>
      <TableList headerTitle={headerTitle} />
    </Container>
  );
};

export default ManageWeblogText;
