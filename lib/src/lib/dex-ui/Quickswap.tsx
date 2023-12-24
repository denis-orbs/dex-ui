import React from 'react';
import styled from 'styled-components'
import { ReactNode } from 'react';
import { NumericInput, TokenSelect, Balance, USD } from '../components';
import { FlexColumn } from '../components/styles';
import '../index.css';

function Quickswap({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

const TokenPanel = ({ children }: { children: ReactNode }) => {
  return (
    <StyledTokenPanel>
      <FlexColumn>{children}</FlexColumn>
    </StyledTokenPanel>
  );
};




const StyledInput = styled(NumericInput)`
  width: 100%;
  input {
    font-size: 24px;
  }
`;

const StyledTokenPanel = styled.div`
  background-color: rgb(35, 39, 52);
  border-radius: 10px;
  padding: 16px;
`;
const Container = styled.div`
  color: white;
  * {
    box-sizing: border-box;
  }
`;


Quickswap.TokenSelect = TokenSelect;
Quickswap.TokenInut = StyledInput;
Quickswap.Balance = Balance;
Quickswap.USD = USD;
Quickswap.Container = Container;
Quickswap.TokenPanel = TokenPanel;
