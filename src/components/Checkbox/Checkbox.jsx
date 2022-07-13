import { Container, InputCheck, Label } from "./checkboxStyle.js";

const Checkbox = ({ title, value, onChange }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <InputCheck type="checkbox" onChange={onChange} />
    </Container>
  );
};

export default Checkbox;
