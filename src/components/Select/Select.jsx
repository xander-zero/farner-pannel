import { Option, SelectStyle } from "./selectStyle";

const Select = ({ items, onChange }) => {
  return (
    <SelectStyle onChange={onChange}>
      {items
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
