import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { POSTER_BASE_URL } from '../../constants';
import { getDetailPath } from '../../lib';
import Container from '../atoms/Container';
import PosterItem from '../atoms/PosterItem';
import Row from '../atoms/Row';

const Wrapper = styled.section`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.black};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blackLighten1};
  }
`;
const Cont = styled.div`
  padding: 68px 0;

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

function MovieVideos({ match, sectionTitle, data, type }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <h2>{sectionTitle}</h2>
            <ul>
              {data &&
                data.map((item) => {
                  const { id, title, poster_path, release_date } = item;
                  return (
                    <PosterItem
                      key={id}
                      link={getDetailPath(match.path, type) + '/' + id}
                      poster_path={POSTER_BASE_URL + poster_path}
                      title={title}
                      release_date={release_date.replace(/-/g, '.')}
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

export default withRouter(MovieVideos);
