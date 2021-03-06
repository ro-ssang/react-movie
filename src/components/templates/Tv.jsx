import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tvApi } from '../../lib/api';
import Loader from '../atoms/Loader';
import DetailTv from '../modules/DetailTv';
import Header from '../modules/Header';
import TopTvShows from '../modules/TopTvShows';
import TvVideos from '../modules/TvVideos';

const Main = styled.main``;

function Tv() {
  const [loading, setLoading] = useState(false);
  const [popularData, setPopularData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [topRatedData, setTopRatedData] = useState(null);
  const [airingTodayData, setAiringTodayData] = useState(null);
  const [onTheAirData, setOnTheAirData] = useState(null);
  const [error, setError] = useState(false);
  const [tvIndex, setTvIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const {
          data: { results: popularResults },
        } = await tvApi.getPopular();
        const { data: detailResults } = await tvApi.getDetail(popularResults[tvIndex].id);
        const {
          data: { results: topRatedResults },
        } = await tvApi.getTopRated();
        const {
          data: { results: airingTodayResults },
        } = await tvApi.getAiringToday();
        const {
          data: { results: onTheAirResults },
        } = await tvApi.getOnTheAir();
        setPopularData(popularResults);
        setDetailData(detailResults);
        setTopRatedData(topRatedResults);
        setAiringTodayData(airingTodayResults);
        setOnTheAirData(onTheAirResults);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [tvIndex]);

  return (
    <>
      <Header />
      <Main>
        {error && <div>에러 발생</div>}
        {loading && <Loader />}
        {!loading && (
          <>
            {detailData && <DetailTv isDetailPage={false} data={detailData} rank={tvIndex + 1} />}
            {popularData && <TopTvShows sectionTitle="TOP10 컨텐츠" data={popularData} changeIndex={setTvIndex} />}
            {topRatedData && <TvVideos sectionTitle="평점 높은 TV 프로그램" data={topRatedData} />}
            {airingTodayData && <TvVideos sectionTitle="오늘의 TV 프로그램" data={airingTodayData} />}
            {onTheAirData && <TvVideos sectionTitle="방영중인 TV 프로그램" data={onTheAirData} />}
          </>
        )}
      </Main>
    </>
  );
}

export default Tv;
