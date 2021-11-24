import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BACKDROP_BASE_URL, POSTER_BASE_URL } from '../../constants';
import { getDetailPath } from '../../lib';
import Container from '../atoms/Container';
import Rating from '../atoms/Rating';
import Row from '../atoms/Row';

const Wrapper = styled.section`
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: url(${({ backdrop_path }) => backdrop_path});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ showNumber }) =>
    showNumber &&
    css`
      &::before {
        content: '${({ rank }) => rank}';
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: ${({ theme }) => theme.fonts.size['5x']};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        line-height: 0.75;
        opacity: 0.2;
      }
    `};
`;
const Cont = styled.div`
  display: flex;
  padding: 97px 0 123px;
  min-height: ${({ fullPage }) => fullPage && '100vh'};
`;
const Poster = styled.div`
  min-width: 425px;
  height: 637px;
  background-color: #ccc;
`;
const Info = styled.div`
  position: relative;
  flex-grow: 1;
  margin-left: 17px;
  ul {
    display: flex;
    margin-top: 12px;
    margin-bottom: 28px;
    li {
      position: relative;
      &:not(:last-child) {
        margin-right: 45px;
        &::before {
          content: '';
          position: absolute;
          right: -26px;
          top: 6px;
          width: 5px;
          height: 5px;
          background-color: ${({ theme }) => theme.colors.white};
          border-radius: 50%;
        }
      }
    }
  }
`;
const Title = styled.h3`
  padding-top: 3px;
  font-size: ${({ theme }) => theme.fonts.size['2x']};
  ${({ multiline }) =>
    multiline &&
    css`
      overflow: hidden;
      display: -webkit-box;
      max-height: 161px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    `};
`;
const Description = styled.p`
  margin-top: 26px;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  line-height: 1.47;
  ${({ multiline }) =>
    multiline &&
    css`
      overflow: hidden;
      display: -webkit-box;
      max-height: 134px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    `};
`;
const ButtonLink = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 0;
  display: inline-block;
  padding: 18px 54px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

function Detail({ match, isDetailPage, data }) {
  const { id, title, release_date, runtime, genres, vote_average, overview, poster_path, backdrop_path } = data;

  return (
    <Wrapper rank="01" showNumber={!isDetailPage} backdrop_path={BACKDROP_BASE_URL + backdrop_path}>
      <Container>
        <Row>
          <Cont fullPage={isDetailPage}>
            {data && (
              <>
                <Poster>
                  <img src={POSTER_BASE_URL + poster_path} alt={title} />
                </Poster>
                <Info>
                  <Title multiline={!isDetailPage}>{title}</Title>
                  <ul>
                    <li>{release_date.substring(0, 4)}</li>
                    <li>{runtime}분</li>
                    <li>{genres.map((obj) => obj.name).join('/')}</li>
                  </ul>
                  <Rating score={vote_average} />
                  <Description multiline={!isDetailPage}>{overview}</Description>
                  {!isDetailPage && <ButtonLink to={getDetailPath(match.path) + '/' + id}>상세정보</ButtonLink>}
                </Info>
              </>
            )}
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default withRouter(Detail);
