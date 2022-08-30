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
  defaultValue,
  width,
  onBlur
}) => {
  return (

    <TextAreaStyle>
      <Label>{label}</Label>
      <Text
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        small={small}
        value={value}
        width={width}
        onBlur={onBlur && onBlur}
      ></Text>
      <Typography onClick={onClick}>{icon}</Typography>
    </TextAreaStyle>
  );
};
export default TextArea;
