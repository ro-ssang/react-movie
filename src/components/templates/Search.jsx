import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { movieApi, tvApi } from '../../lib/api';
import Loader from '../atoms/Loader';
import Header from '../modules/Header';
import MovieVideos from '../modules/MovieVideos';
import TvVideos from '../modules/TvVideos';

const Main = styled.main``;

function Search({ location }) {
  const [loading, setLoading] = useState(false);
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { search } = location;
    const keyword = search.slice(1).split('=')[1];

    async function fetchData() {
      setLoading(true);
      try {
        const {
          data: { results: searchMovieResults },
        } = await movieApi.getSearch(keyword);
        const {
          data: { results: searchTvResults },
        } = await tvApi.getSearch(keyword);
        setMovieResults(searchMovieResults);
        setTvResults(searchTvResults);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [location]);

  return (
    <>
      <Header />
      <Main>
        {error && <div>에러 발생</div>}
        {loading && <Loader />}
        {!loading && (
          <>
            {movieResults && <MovieVideos sectionTitle="영화 검색 결과" data={movieResults} type="movie" />}
            {tvResults && <TvVideos sectionTitle="TV 검색 결과" data={tvResults} type="tv" />}
          </>
        )}
      </Main>
    </>
  );
}

export default withRouter(Search);
