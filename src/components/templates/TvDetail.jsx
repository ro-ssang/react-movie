import React from 'react';
import styled from 'styled-components';
import Detail from '../modules/Detail';
import Header from '../modules/Header';

const Main = styled.main``;

function TvDetail() {
  return (
    <>
      <Header />
      <Main>
        <Detail isDetailPage={true} />
      </Main>
    </>
  );
}

export default TvDetail;
