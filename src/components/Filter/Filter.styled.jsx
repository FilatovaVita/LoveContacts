import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 5px;
  margin: 2% auto;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  padding: 2%;
  background-image: linear-gradient(-225deg, #e3fdf5 50%, #ffe6fa 50%);
  display: flex;
  flex-direction: column;

  > label {
    margin-top: 2%;
  }
`;

export const FilterInput = styled.input`
  width: 350px;
  height: 40px;
  margin: 2%;
  padding: 10px;
  font-size: 14px;
  color: #5e6472;
  outline: none;
  border: none;
  border-radius: 0px 5px 5px 0px;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;
