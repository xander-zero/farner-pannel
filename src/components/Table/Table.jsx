import InputFeild from "../InputFeild/InputFeild";
import { ListStyle, Paginate, SearchBox, Table, Th, Tr } from "./tableStyle";

const TableList = ({ items, headerTitle, noPaginate, onChange }) => {
  return (
    <ListStyle>
      <SearchBox>
        {noPaginate ? (
          ""
        ) : (
          <InputFeild
            type="text"
            placeholder="جستجو کنید..."
            onChange={onChange}
          />
        )}
      </SearchBox>
      <Table>
        <thead>
          <Tr>
            {headerTitle?.map((title, index) => (
              <Th key={index}>{title}</Th>
            ))}
          </Tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
      <Paginate>
        {/* <Pagination
            page={+page}
            onChange={(event, value) => setPage(value)}
            count={countPage}
            color="primary"
          /> */}
      </Paginate>
    </ListStyle>
  );
};

export default TableList;
