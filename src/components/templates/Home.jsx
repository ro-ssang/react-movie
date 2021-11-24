import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { movieApi } from '../../lib/api';
import Detail from '../modules/Detail';
import Header from '../modules/Header';

const Main = styled.main``;

function Home() {
  const [loading, setLoading] = useState(false);
  const [popularData, setPopularData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const {
          data: { results: popularResults },
        } = await movieApi.getPopular();
        const { data: detailResults } = await movieApi.getDetail(popularResults[0].id);
        setPopularData(popularResults);
        setDetailData(detailResults);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {error && <div>에러 발생</div>}
        {loading && <div>로딩중...</div>}
        {!loading && popularData && detailData && <Detail isDetailPage={false} data={detailData} />}
      </Main>
    </>
  );
}

export default Home;
