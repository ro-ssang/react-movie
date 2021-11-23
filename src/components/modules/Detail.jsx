import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { getDetailPath } from '../../lib';
import Container from '../atoms/Container';
import Rating from '../atoms/Rating';
import Row from '../atoms/Row';

const Wrapper = styled.section`
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
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

  h3 {
    padding-top: 3px;
    font-size: ${({ theme }) => theme.fonts.size['2x']};
  }

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

function Detail({ match, isDetailPage }) {
  return (
    <Wrapper rank="01" showNumber={!isDetailPage}>
      <Container>
        <Row>
          <Cont>
            <Poster></Poster>
            <Info>
              <h3>이터널스</h3>
              <ul>
                <li>2021</li>
                <li>157분</li>
                <li>액션/모험/SF</li>
              </ul>
              <Rating score={5.7} />
              <Description multiline={!isDetailPage}>
                수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의 히어로들이 "어벤져스: 엔드게임" 이후 인류의 가장
                오래된 적 '데비안츠'에 맞서기 위해 다시 힘을 합치면서 벌어지는 이야기
              </Description>
              {!isDetailPage && <ButtonLink to={getDetailPath(match.path) + '/1'}>상세정보</ButtonLink>}
            </Info>
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default withRouter(Detail);
