import { Container, InputCheck, Span } from "./checkboxStyle.js";

const Checkbox = ({ title, value, onChange }) => {
  return (
    <Container>
      <Span>{title}</Span>
      <InputCheck type="checkbox" onChange={onChange} />
    </Container>
  );
};

export default Checkbox;
