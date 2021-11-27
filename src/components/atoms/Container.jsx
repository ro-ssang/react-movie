import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  /* background: rgba(255, 255, 255, 0.3); */
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
