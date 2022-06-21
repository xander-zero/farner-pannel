import { Option, SelectStyle } from "./selectStyle";

const Select = ({ items }) => {
  return (
    <SelectStyle>
      {items?.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.name}
        </Option>
      ))}
    </SelectStyle>
  );
};

export default Select;
