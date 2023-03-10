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
export const Box = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fed6e3;
  padding: 10px;
  border-radius: 15px;
  margin-top: -70px;
  &:hover {
    box-shadow: 0 0 10px 0 #ffb8c6 inset, 0 0 10px 4px #ffb8c6;
  }
`;
