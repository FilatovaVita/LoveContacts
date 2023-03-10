import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fed6e3;
`;
export const Link = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: x-large;

  @media (max-width: 750px) {
    font-size: medium;
  }

  @media (max-width: 480px) {
    font-size: small;
    > p {
      display: none;
    }
  }
  &.active {
    color: white;
  }
  &.hover {
    color: #fed6e3;
    background-color: #a8edea;
  }
`;