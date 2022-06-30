import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Collapse } from "reactstrap";
import TagCard from "./TagCard";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import InputFeild from "../InputFeild/InputFeild";

function TagGenerator({ tags, setTags }) {
  const [tag, setTag] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();

    if (tag.length < 1) return null;

    const isExistTag = tags.some((point) => point === tag);
    if (!isExistTag) {
      setTags((oldTag) => [...tags, tag]);
      setTag("");
    }
  };

  const handleDeleteTag = (title) => {
    setTags(tags.filter((point) => point !== title));
  };

  const renderTagList = () => {
    return tags.map((point, index) => (
      <TagCard
        key={index}
        title={point}
        handleDeleteTag={handleDeleteTag}
        color="white"
      />
    ));
  };

  return (
    <TagGenerateWrapper>
      <ToggleQuestion></ToggleQuestion>

      <TagFormStyle>
        <form
          className="form-tag-crt"
          id="tag-form"
          onSubmit={handleAddTag}
          noValidate
        >
          <InputFeild
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            maxLenght="15"
            placeholder="کلمات کلیدی... + Enter"
          />
        </form>
        <TagListContainer>{renderTagList()}</TagListContainer>
      </TagFormStyle>
    </TagGenerateWrapper>
  );
}

const TagGenerateWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-radius: 0.3rem;
`;

const ToggleQuestion = styled(motion.div)`
  .toggle-question {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .switch-cost {
      width: 0;
      height: 0;
      visibility: hidden;
    }

    .toggle-shape {
      display: block;
      width: 100px;
      height: 35px;
      background-color: #5f8d77;
      border-radius: 15px;
      position: relative;
      cursor: pointer;
      transition: 0.5s;
      box-shadow: 0 0 20px #477a8550;
      top: 0;
      margin-right: 1rem;
    }

    .toggle-shape::after {
      display: flex;
      justify-content: center;
      align-items: center;
      content: "غیر فعال";
      font-size: 0.8rem;
      line-height: 1rem;
      font-weight: bold;
      width: 60px;
      height: 27px;
      background-color: ${({ theme }) => theme.backgroundSidebar};
      position: absolute;
      border-radius: 12px;
      top: 4px;
      left: 3px;
      transition: 0.5s;
    }
  }

  .toggle-question input[type="checkbox"]:checked + label::after {
    left: calc(100% - 4px);
    content: "فعال";
    transform: translateX(-100%);
  }
`;

const TagFormStyle = styled(motion.div)`
  width: 100%;
  padding: 1rem;

  .form-tag-crt {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      width: 50%;
      background-color: #5f8d77;
      border-radius: 0.5rem;
      color: #fff;
      font-size: 12px;
    }
  }
`;

const TagListContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default TagGenerator;
