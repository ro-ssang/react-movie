import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { tvApi } from '../../lib/api';
import CastList from '../atoms/CastList';
import Loader from '../atoms/Loader';

import DetailTv from '../modules/DetailTv';
import Header from '../modules/Header';

const Main = styled.main``;

function TvDetail({ match }) {
  const [loading, setLoading] = useState(false);
  const [tvData, setTvData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const {
      params: { tvId },
    } = match;

    async function fetchData() {
      setLoading(true);
      try {
        const { data: tvResults } = await tvApi.getDetail(tvId);
        const {
          data: { cast: castResults },
        } = await tvApi.getCredits(tvId);
        setTvData(tvResults);
        setCastData(castResults);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [match]);

  return (
    <>
      <Header />
      <Main>
        {error && <div>에러 발생</div>}
        {loading && <Loader />}
        {!loading && (
          <>
            {tvData && <DetailTv isDetailPage={true} data={tvData} />}
            {castData && <CastList data={castData} />}
          </>
        )}
      </Main>
    </>
  );
}

export default withRouter(TvDetail);
