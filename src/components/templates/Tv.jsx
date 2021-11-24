import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tvApi } from '../../lib/api';
import Loader from '../atoms/Loader';
import DetailTv from '../modules/DetailTv';
import Header from '../modules/Header';

const Main = styled.main``;

function Tv() {
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
        } = await tvApi.getPopular();
        const { data: detailResults } = await tvApi.getDetail(popularResults[0].id);
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
        {loading && <Loader />}
        {!loading && popularData && detailData && <DetailTv isDetailPage={false} data={detailData} />}
      </Main>
    </>
  );
}

export default Tv;
