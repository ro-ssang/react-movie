import React from 'react';
import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';
import Container from './Container';
import Row from './Row';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.blackLighten1};
`;
const Cont = styled.div`
  padding: 52px 0 78px;
`;

function Comment({ data }) {
  const { id, title } = data;

  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <DiscussionEmbed
              shortname="react-movie"
              config={{
                identifier: id.toString(),
                title: title,
              }}
            />
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Comment;
