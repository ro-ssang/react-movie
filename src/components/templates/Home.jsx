import React from 'react';
import styled from 'styled-components';
import useFetchData from '../../hooks/useFetchData';
import { movieApi } from '../../lib/api';
import Detail from '../modules/Detail';
import Header from '../modules/Header';

const Main = styled.main``;

function Home() {
  const [loadingPopular, popularData, popularError] = useFetchData(movieApi.getPopular);

  return (
    <>
      <Header />
      <Main>
        {popularError && <div>GET Popular 에러 발생</div>}
        {loadingPopular && <div>로딩중...</div>}
        {!loadingPopular && popularData && <Detail isDetailPage={false} data={popularData[0]} />}
      </Main>
    </>
  );
}

export default Home;
