import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/img/play.svg';

const Wrapper = styled.li`
  &:not(:last-child) {
    margin-right: 22px;
  }
  h3 {
    margin-top: 23px;
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
  span {
    margin-top: 6px;
    font-size: ${({ theme }) => theme.fonts.size.xs};
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    opacity: 0.5;
  }

  figure {
    position: relative;
    width: 202px;
    height: 302px;
    background-color: #ccc;
    &:hover {
      em {
        display: flex;
      }
    }

    em {
      position: absolute;
      left: 0;
      top: 0;
      display: none;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0.67;
    }
  }
`;
const PlayIcon = styled(Play)``;

function PosterItem({ link, poster_path, title, release_date }) {
  return (
    <Wrapper>
      <Link to={link}>
        <figure>
          <img src={poster_path} alt={title} />
          <em>
            <PlayIcon />
          </em>
        </figure>
        <h3>{title}</h3>
        <span>{release_date}</span>
      </Link>
    </Wrapper>
  );
}

export default PosterItem;
