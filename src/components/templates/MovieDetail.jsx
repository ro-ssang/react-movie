import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { movieApi } from '../../lib/api';
import CastList from '../atoms/CastList';
import Comment from '../atoms/Comment';
import Loader from '../atoms/Loader';
import VideoList from '../atoms/VideoList';
import DetailMovie from '../modules/DetailMovie';
import Header from '../modules/Header';

const Main = styled.main``;

function MovieDetail({ match }) {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const {
      params: { movieId },
    } = match;

    async function fetchData() {
      setLoading(true);
      try {
        const { data: movieResults } = await movieApi.getDetail(movieId);
        const {
          data: { cast: castResults },
        } = await movieApi.getCredits(movieId);
        const {
          data: { results: videoResults },
        } = await movieApi.getVideos(movieId);
        setMovieData(movieResults);
        setCastData(castResults);
        setVideoData(videoResults);
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
            {movieData && <DetailMovie isDetailPage={true} data={movieData} />}
            {castData && <CastList data={castData} />}
            {videoData && <VideoList data={videoData} />}
            {movieData && <Comment data={movieData} />}
          </>
        )}
      </Main>
    </>
  );
}

export default withRouter(MovieDetail);
