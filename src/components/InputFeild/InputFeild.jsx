import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

// styled ccomponents
import styled from "styled-components";

const InputFeild = ({
  label,
  type,
  placeholder,
  onChange,
  name,
  value,
  space,
  icon,
  weight,
  defaultValue,
}) => {
  return (
    <FormControl space={space}>
      <Label weight={weight} htmlFor={label}>
        {label}
      </Label>
      <Input
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        id={label}
      />
      {icon}
    </FormControl>
  );
};

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${({ space }) => (space ? "5px" : "0")};
  margin-top: 0.4rem;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    top: 40%;
  }
  /* margin-left: 1.5rem; */
  /* justify-content: space-between; */
`;
const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.4rem;
  font-weight: ${({ weight }) => (weight ? "bold" : "")};
`;

const Input = styled.input`
  -webkit-appearance: none;
  border: 1px solid #c8cccf;
  border-radius: 5px;
  outline: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundSidebar};
  height: calc(2.25rem + 2px);
  padding: 0 0.5rem;
  font-family: "IRAN";

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
  }
`;


export default InputFeild;
