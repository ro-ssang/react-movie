import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Nav from '../atoms/Nav';
import Row from '../atoms/Row';
import SearchBar from '../atoms/SearchBar';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0 20px 0;
`;

function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <Nav />
            <SearchBar />
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;
