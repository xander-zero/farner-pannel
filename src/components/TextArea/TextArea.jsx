import Typography from "../Typography/Typography";
import { Label, Text, TextAreaStyle } from "./textareaStyle";

const TextArea = ({
  label,
  placeholder,
  onChange,
  small,
  icon,
  onClick,
  value,
}) => {
  return (
    <TextAreaStyle>
      <Label>{label}</Label>
      <Text
        placeholder={placeholder}
        onChange={onChange}
        small={small}
        value={value}
      ></Text>
      <Typography onClick={onClick}>{icon}</Typography>
    </TextAreaStyle>
  );
};
export default TextArea;
