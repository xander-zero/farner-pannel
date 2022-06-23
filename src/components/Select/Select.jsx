import { Option, SelectStyle } from "./selectStyle";

const Select = ({ items, onChange }) => {
  return (
    <SelectStyle onChange={onChange}>
      {items?.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.label}
        </Option>
      ))}
    </SelectStyle>
  );
};

export default Select;
