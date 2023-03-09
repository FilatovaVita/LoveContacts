import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
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
export const InputStyle = styled(Field)`
  width: 350px;
  height: 40px;
  margin-top: 2%;
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
export const AddButton = styled.button`
  display: inline-block;
  color: #252537;
  width: 280px;
  height: 50px;
  padding: 0 10px;
  background: #fff;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 7% auto;
  letter-spacing: 0.05em;
  box-shadow: 0 0 40px 40px #ffb8c6 inset, 0 0 0 0 #ffb8c6;
  transition: 0.15s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px 0 #ffb8c6 inset, 0 0 10px 4px #ffb8c6;
    color: #ffb8c6;
  }
`;
