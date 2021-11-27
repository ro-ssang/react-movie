import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';
import Row from '../atoms/Row';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
`;
const Cont = styled.div`
  padding: 52px 0 78px;

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    grid-template-rows: 315px;
    gap: 20px;
    margin-top: 28px;
    li {
      iframe {
        width: 100%;
      }
    }
  }
`;

function VideoItem({ id }) {
  return (
    <li>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </li>
  );
}

function VideoList({ data }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <h2>관련 영상</h2>
            <ul>
              {data.map((item) => {
                const { id, key: videoId } = item;
                return <VideoItem key={id} id={videoId} />;
              })}
            </ul>
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default VideoList;
