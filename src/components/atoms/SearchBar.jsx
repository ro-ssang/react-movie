import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  margin-left: 26px;

  input {
    padding: 12px 25px 9px;
    width: 100%;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fonts.size.xs};
    background-color: ${({ theme }) => theme.colors.blackLighten2};
  }
`;

function SearchBar() {
  return <Wrapper>{<input type="text" placeholder="검색어를 입력하세요!" />}</Wrapper>;
}

export default SearchBar;
