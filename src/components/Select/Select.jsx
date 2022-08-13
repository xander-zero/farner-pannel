import { Option, SelectStyle } from "./selectStyle";

const Select = ({ items, onChange }) => {
  if (!items) {
    return <h1>Loading...</h1>;
  }
  return (
    <SelectStyle onChange={onChange}>
      <Option value="" selected={"انتخاب کنید"}>
        انتخاب کنید
      </Option>
      {items?.length > 0
        ? items?.map((item, index) => (
            <Option
              key={index}
              value={item?.value}
              selected={item?.label === "انتخاب کنید"}
            >
              {item?.label}
            </Option>
          ))
        : []}
    </SelectStyle>
  );
};

export default Select;
