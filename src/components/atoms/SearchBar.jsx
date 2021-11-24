import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
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
    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

function SearchBar({ history }) {
  const [keyword, setKeyword] = useState('');

  const onChangeInput = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const path = `/search?keyword=${keyword}`;
      history.push(path);
    },
    [history, keyword]
  );

  return (
    <Wrapper>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="검색어를 입력하세요!" value={keyword} onChange={onChangeInput} />
      </form>
    </Wrapper>
  );
}

export default withRouter(SearchBar);
