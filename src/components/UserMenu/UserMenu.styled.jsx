import styled from '@emotion/styled';

export const LogOutButton = styled.button`
  display: flex;
  position: relative;
  color: #252537;
  width: 150px;
  height: 50px;
  padding: 0 10px;
  font-weight: bold;
  background: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
  letter-spacing: 0.05em;

  @media (max-width: 750px) {
    width: 100px;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 70px;
    height: 30px;
    font-size: x-small;
  }

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
export const UserNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  > p {
    font-size: x-large;
    font-weight: bolder;
  }
  @media (max-width: 750px) {
    > p {
      font-size: medium;
    }
  }
  @media (max-width: 480px) {
    > p {
      font-size: small;
    }
  }
`;
