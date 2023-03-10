import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
export const DefoltMassege = styled.p`
  color: red;
  margin: 10px;
  text-transform: uppercase;
  padding: 50px 170px;
  font-weight: bolder;
  font-size: large;
`;

export const HelloMassege = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;
export const HeroLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  font-weight: 600;
  font-size: x-large;
  width: 250px;
  height: 50px;
  padding: 0 10px;
  background: #fff;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin: 7% auto;
  letter-spacing: 0.05em;
  &:before,
  &:after {
    content: '';
    border: 4px solid transparent;
    position: absolute;
    width: 0;
    height: 0;
    box-sizing: content-box;
  }
  &:before {
    top: -6px;
    left: -6px;
  }
  &:after {
    bottom: -6px;
    right: -6px;
  }
  &:hover:before,
  &:active:before,
  &:focus:before {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-top-color: #ffb8c6;
    border-right-color: #ffb8c6;
    transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
  }
  &:hover:after,
  &:active:after,
  &:focus:after {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-bottom-color: #ffb8c6;
    border-left-color: #ffb8c6;
    transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s,
      height 0.2s ease-out 0.6s;
  }

  &:active {
    background-color: #b8f2e6;
  }
`;
