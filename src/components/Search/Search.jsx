import React from "react";
// styled components module
import styled from "styled-components";

const Search = ({ size }) => {
  return (
    <SearchStyle size={size}>
      <span className="material-icons-sharp">search</span>
      <InputSearch
        type="text"
        placeholder="جستجو..."
        // onChange={(e) => dispatch(searchListService(e.target.value))}
      />
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  display: flex;
  position: relative;
  width: ${({ size }) => (size ? "40%" : "70%")};
  span {
    position: absolute;
    z-index: 1;
    bottom: 5px;
    color: #8e9296;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const InputSearch = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  height: calc(2.25rem + 2px);
  padding: 0 1.5rem;
  border-radius: 5px;
  font-family: "IRAN";
  outline: none;
  color: ${({ theme }) => theme.text};
`;

export default Search;
