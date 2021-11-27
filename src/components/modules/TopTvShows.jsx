import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Row from '../atoms/Row';
import RankItem from '../atoms/RankItem';
import { withRouter } from 'react-router';
import { getDetailPath } from '../../lib';
import { POSTER_BASE_URL } from '../../constants';

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
    margin-top: 28px;
  }
`;

function TopTvShows({ match, sectionTitle, data, changeIndex }) {
  const slicedData = data.slice(0, 10);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <h2>{sectionTitle}</h2>
            <ul>
              {slicedData.map((item, index) => {
                const { id, name, poster_path } = item;
                return (
                  <RankItem
                    key={id}
                    link={getDetailPath(match.path) + '/' + id}
                    title={name}
                    rank={index}
                    poster_path={POSTER_BASE_URL + poster_path}
                    changeIndex={changeIndex}
                  />
                );
              })}
            </ul>
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default withRouter(TopTvShows);
