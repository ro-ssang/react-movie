import React from 'react';
import styled from 'styled-components';
import { POSTER_BASE_URL } from '../../constants';
import Container from '../atoms/Container';
import Row from '../atoms/Row';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.blackLighten1};
`;
const Cont = styled.div`
  padding: 52px 0 78px;

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
  ul {
    overflow: hidden;
    display: flex;
    margin-top: 28px;

    li {
      &:not(:last-child) {
        margin-right: 20px;
      }
      em {
        display: block;
        margin-top: 14px;
        font-size: ${({ theme }) => theme.fonts.size.sm};
      }
      span {
        display: block;
        margin-top: 7px;
        font-size: ${({ theme }) => theme.fonts.size.xs};
        opacity: 0.5;
      }
    }
  }
`;
const Avatar = styled.div`
  width: 138px;
  height: 194px;
  background-color: #ccc;
  img {
    height: 100%;
  }
`;

function CastItem({ name, character, profile_path }) {
  return (
    <li>
      <Avatar>
        <img src={profile_path} alt={name} />
      </Avatar>
      <em>{name}</em>
      <span>{character}</span>
    </li>
  );
}

function CastList({ data }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Cont>
            <h2>출연진</h2>
            <ul>
              {data.map((item) => {
                const { id, name, character, profile_path } = item;
                return (
                  <CastItem key={id} name={name} character={character} profile_path={POSTER_BASE_URL + profile_path} />
                );
              })}
            </ul>
          </Cont>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default CastList;
