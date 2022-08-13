import TableList from "../../../components/Table/Table";
import { Container, HeaderTitle } from "../../../theme/GlobalStyle";

const ManagementPage = () => {
  const headerTitle = ["کد کارشناس", "عنوان", "تاریخ بارگذاری", "جزییات"];

  return (
    <Container>
      <HeaderTitle>مدیریت صفحات</HeaderTitle>
      <TableList headerTitle={headerTitle} />
    </Container>
  );
};

export default ManagementPage;
