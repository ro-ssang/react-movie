import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
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

function MovieVideos({ match, sectionTitle, data }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <h2>{sectionTitle}</h2>
            <ul>
              <PosterItem
                link={getDetailPath(match.path) + '/' + 1}
                poster_path=""
                title="이터널스"
                release_date="2021.10.05"
              />
            </ul>
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default withRouter(MovieVideos);
