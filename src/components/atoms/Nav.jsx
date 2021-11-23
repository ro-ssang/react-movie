import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { isMatch } from '../../lib';

const Wrapper = styled.nav`
  padding-top: 3px;
  ul {
    display: flex;
  }
  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
const StyledLink = styled(Link)`
  position: relative;
  padding: 10px 0 4px;
  font-size: ${({ theme }) => theme.fonts.size.lg};
`;
const BorderLink = styled(StyledLink)`
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    display: ${({ matched }) => (matched === 'true' ? 'block' : 'none')};
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

function Nav({ match }) {
  return (
    <Wrapper>
      <ul>
        <li>
          <StyledLink to="/">리액트.JS</StyledLink>
        </li>
        <li>
          <BorderLink to="/" matched={isMatch(match, '/').toString()}>
            영화
          </BorderLink>
        </li>
        <li>
          <BorderLink to="/tv" matched={isMatch(match, '/tv').toString()}>
            TV
          </BorderLink>
        </li>
      </ul>
    </Wrapper>
  );
}

export default withRouter(Nav);
