import { Option, SelectStyle } from "./selectStyle";
import styled from "styled-components";

const Select = ({ items, onChange, label }) => { 
  if (!items) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Label weight="bold">{label}</Label>
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
    </>
  );
};

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
  font-weight: ${({ weight }) => (weight ? "bold" : "")};
`;


export default Select;
