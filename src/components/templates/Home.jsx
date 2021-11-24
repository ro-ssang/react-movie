import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { movieApi } from '../../lib/api';
import Loader from '../atoms/Loader';
import DetailMovie from '../modules/DetailMovie';
import Header from '../modules/Header';
import MovieVideos from '../modules/MovieVideos';
import TopMovies from '../modules/TopMovies';

const Main = styled.main``;

function Home() {
  const [loading, setLoading] = useState(false);
  const [popularData, setPopularData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [nowPlayingData, setNowPlayingData] = useState(null);
  const [upcomingData, setUpcomingData] = useState(null);
  const [topRatedData, setTopRatedData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const {
          data: { results: popularResults },
        } = await movieApi.getPopular();
        const { data: detailResults } = await movieApi.getDetail(popularResults[0].id);
        const {
          data: { results: nowPlayingResults },
        } = await movieApi.getNowPlaying();
        const {
          data: { results: upcomingResults },
        } = await movieApi.getUpcoming();
        const {
          data: { results: topRatedResults },
        } = await movieApi.getTopRated();
        setPopularData(popularResults);
        setDetailData(detailResults);
        setNowPlayingData(nowPlayingResults);
        setUpcomingData(upcomingResults);
        setTopRatedData(topRatedResults);
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
        {!loading && (
          <>
            {detailData && <DetailMovie isDetailPage={false} data={detailData} />}
            {popularData && <TopMovies sectionTitle="TOP10 컨텐츠" data={popularData} />}
            {nowPlayingData && <MovieVideos sectionTitle="상영중인 영화" data={nowPlayingData} />}
            {upcomingData && <MovieVideos sectionTitle="개봉 예정 영화" data={upcomingData} />}
            {topRatedData && <MovieVideos sectionTitle="평점 높은 영화" data={topRatedData} />}
          </>
        )}
      </Main>
    </>
  );
}

export default Home;
