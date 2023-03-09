import styled from '@emotion/styled';

export const NavContainer = styled.div`
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
      display: none;
    }
  }
`;
