import styled from "styled-components";

export const ListStyle = styled.div`
  max-height: 100vh;
  width: 100%;
  overflow: auto;
  text-align: center;
  margin-top: 1rem;
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchBox = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};

  div {
    width: 40%;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  color: ${({ theme }) => theme.text};
  font-size: 15px;

  padding: 10px 20px;
  font-size: 14px;
`;
export const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  /* &:nth-child(even) {
    background-color: #edeef1;
  } */
`;
export const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  /* &:nth-child(odd) {
    background-color: #dddddd;
  } */
`;

export const Paginate = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;
