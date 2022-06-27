import { Label, Text, TextAreaStyle } from "./textareaStyle";

const TextArea = ({ label, placeholder }) => {
  return (
    <TextAreaStyle>
      <Label>{label}</Label>
      <Text placeholder={placeholder}></Text>
    </TextAreaStyle>
  );
};
export default TextArea;
