import styled from "styled-components";
import { FiDelete } from "react-icons/fi";
import Typography from "../Typography/Typography";

const TagCard = ({ title, handleDeleteTag, color }) => {
  return (
    <TagCardStyle onClick={(e) => handleDeleteTag(title)}>
      <Typography size="12px" primary={color}>
        {title}
      </Typography>
      <FiDelete />
    </TagCardStyle>
  );
};

const TagCardStyle = styled.div`
  max-width: 130px;
  min-width: 90px;
  cursor: pointer;
  /* width: 90px; */
  /* max-height: 40px; */
  min-height: 10px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: #007bff;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

export default TagCard;
