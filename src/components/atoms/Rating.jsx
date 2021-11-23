import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/img/star.svg';
import { ReactComponent as EmptyStar } from '../../assets/img/empty_star.svg';
import { countStars } from '../../lib';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;
const StarCont = styled.div`
  margin-right: 9px;

  svg {
    &:not(:last-child) {
      margin-right: 3px;
    }
  }
`;
const StarIcon = styled(Star)``;
const EmptyStarIcon = styled(EmptyStar)``;

function Rating({ score }) {
  const count = countStars(score);

  return (
    <Wrapper>
      <StarCont>
        {count.map((bool, index) => (bool ? <StarIcon key={index} /> : <EmptyStarIcon key={index} />))}
      </StarCont>
      <span>{score}</span>
    </Wrapper>
  );
}

export default Rating;
