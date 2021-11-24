import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Row from '../atoms/Row';
import RankItem from '../atoms/RankItem';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.blackLighten1};
`;
const Cont = styled.div`
  padding: 52px 0 78px;

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }

  ul {
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
  }
`;

function TopMovies({ sectionTitle, data }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <h2>{sectionTitle}</h2>
            <ul>
              <RankItem link="" title="" rank={0} poster_path="" />
            </ul>
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default TopMovies;
