import { Container, InputCheck, Span } from "./checkboxStyle.js";

const Checkbox = ({ title }) => {
  return (
    <Container>
      <Span>{title}</Span>
      <InputCheck type="checkbox" checked="checked" />
    </Container>
  );
};

export default Checkbox;
