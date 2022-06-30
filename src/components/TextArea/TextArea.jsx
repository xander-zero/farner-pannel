import { Label, Text, TextAreaStyle } from "./textareaStyle";

const TextArea = ({ label, placeholder, onChange }) => {
  return (
    <TextAreaStyle>
      <Label>{label}</Label>
      <Text placeholder={placeholder} onChange={onChange}></Text>
    </TextAreaStyle>
  );
};
export default TextArea;
