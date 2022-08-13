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
  name,
}) => {
  return (
    <TextAreaStyle>
      <Label>{label}</Label>
      <Text
        name={name}
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
