import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 425px;
  height: 637px;
  background-color: #ccc;
  img {
    height: 100%;
  }
`;

function Poster({ poster_path, alt }) {
  return (
    <Wrapper>
      <img src={poster_path} alt={alt} />
    </Wrapper>
  );
}

export default Poster;
