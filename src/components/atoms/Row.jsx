import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 20px;
`;

function Row({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Row;
