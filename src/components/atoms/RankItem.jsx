import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Num01 } from '../../assets/img/num_01.svg';
import { ReactComponent as Num02 } from '../../assets/img/num_02.svg';
import { ReactComponent as Num03 } from '../../assets/img/num_03.svg';
import { ReactComponent as Num04 } from '../../assets/img/num_04.svg';
import { ReactComponent as Num05 } from '../../assets/img/num_05.svg';
import { ReactComponent as Num06 } from '../../assets/img/num_06.svg';
import { ReactComponent as Num07 } from '../../assets/img/num_07.svg';
import { ReactComponent as Num08 } from '../../assets/img/num_08.svg';
import { ReactComponent as Num09 } from '../../assets/img/num_09.svg';
import { ReactComponent as Num10 } from '../../assets/img/num_10.svg';

const Numbers = [
  <Num01 />,
  <Num02 />,
  <Num03 />,
  <Num04 />,
  <Num05 />,
  <Num06 />,
  <Num07 />,
  <Num08 />,
  <Num09 />,
  <Num10 />,
];

const Wrapper = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  figure {
    position: relative;
    padding-left: 96px;
    /* background: #ccc; */
    box-sizing: border-box;
    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 96px;
    }
    img {
      display: block;
      width: 138px;
      height: 194px;
      background: #ddd;
    }
  }
`;

function RankItem({ link, title, rank, poster_path, changeIndex }) {
  return (
    <Wrapper onClick={() => changeIndex(rank)}>
      <Link to="#">
        <figure>
          {Numbers[rank]}
          <img src={poster_path} alt={title} />
        </figure>
      </Link>
    </Wrapper>
  );
}

export default RankItem;
