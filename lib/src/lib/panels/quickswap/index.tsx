import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';
import {
  NumericInput,
  Balance,
  USD,
  Logo,
  NumericInputProps,
  Spinner,
  TokenModal,
} from '../../components';
import { FlexRow } from '../../components/styles';
import { ArrowDown } from 'react-feather';
import { DexProps, SubmitButtonProps } from '../../types';
const colors = {
  primary: 'rgb(68, 138, 255)',
  text: '#c7cad9',
};

const StyledChangeTokens = styled(FlexRow)`
  height: 7px;
  width: 100%;
  justify-content: center;

  button {
    cursor: pointer;
    position: relative;
    background: transparent;
    border: unset;
    border-radius: 50%;
    border: 8px solid rgb(40, 45, 61);
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(105, 108, 128);
  }
  svg {
    color: #282d3d;
    width: 14px;
  }
`;

const ChangeTokens = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledChangeTokens>
      <button onClick={onClick}>
        <ArrowDown />
      </button>
    </StyledChangeTokens>
  );
};
const Main = ({ children }: { children: ReactNode }) => {
  return <StyledTokenPanel>{children}</StyledTokenPanel>;
};

const StyledPercentButtons = styled(FlexRow)`
  button {
    background: transparent;
    color: ${colors.primary};
    border: unset;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const PercentButtons = ({ onClick }: { onClick: (value: number) => void }) => {
  return (
    <StyledPercentButtons>
      <button onClick={() => onClick(0.5)}>50%</button>
      <button onClick={() => onClick(1)}>Max</button>
    </StyledPercentButtons>
  );
};

const StyledTokenSelect = styled(FlexRow)<{ $selected: boolean }>`
  width: fit-content;
  padding: 8px 13px 8px 8px;
  border-radius: 38px;
  height: 40px;
  background: ${({ $selected }) =>
    $selected
      ? 'rgb(64, 69, 87)'
      : 'linear-gradient(105deg, rgb(68, 138, 255) 3%, rgb(0, 76, 230))'};
`;

export const TokenSelect = ({
  symbol,
  logoUrl,
  onClick,
}: {
  symbol?: string;
  logoUrl?: string;
  onClick: () => void;
}) => {
  return (
    <StyledTokenSelect $selected={!!symbol} onClick={onClick}>
      {logoUrl && <Logo src={logoUrl} />}
      <p>{symbol || 'Select token'}</p>
    </StyledTokenSelect>
  );
};

const Middle = ({
  input,
  tokenSelect,
}: {
  input: ReactNode;
  tokenSelect: ReactNode;
}) => {
  return (
    <FlexRow>
      {tokenSelect}
      {input}
    </FlexRow>
  );
};

const StyledInput = styled(NumericInput)`
  width: 100%;

  input {
    font-size: 24px;
    text-align: right;
    color: white;
  }
`;

const TokenInput = (props: NumericInputProps) => {
  return <StyledInput {...props} placeholder="0.00" />;
};

const StyledTokenPanel = styled.div`
  background-color: #232734;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StyledContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: #1b1e29;
  padding: 24px;
  border-radius: 20px;
  color: ${colors.text};
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledTop = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
`;
const Top = ({ label, element }: { label: string; element?: ReactNode }) => {
  return (
    <StyledTop>
      <p>{label}</p>
      {element}
    </StyledTop>
  );
};

const StyledBottom = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
`;

const Bottom = ({ usd, balance }: { usd: ReactNode; balance: ReactNode }) => {
  return (
    <StyledBottom>
      {balance}
      {usd}
    </StyledBottom>
  );
};

const StyledSubmitButton = styled.button<{ $disabled?: boolean }>`
  background: ${({ $disabled }) =>
    $disabled ? 'linear-gradient(180deg, #252833, #1d212c)' : colors.primary};
  min-height: 52px;
  border-radius: 10px;
  font-size: 16px;
  border: unset;
  color: ${({ $disabled }) => ($disabled ? '#696c80' : 'white')};
  font-weight: 600;
  margin-top: 20px;
  cursor: ${({ $disabled }) => ($disabled ? 'unset' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  position: relative;
`;

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <StyledSubmitButton $disabled={props.disabled} onClick={props.onClick}>
      <p style={{ opacity: props.isLoading ? 0 : 1 }}>{props.text}</p>
      {props.isLoading ? <Spinner /> : null}
    </StyledSubmitButton>
  );
};

export const Quickswap = (props: DexProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Main>
          <Top
            label={props.srcLabel || 'From'}
            element={<PercentButtons onClick={props.onPercentClick} />}
          />
          <Middle
            input={
              <TokenInput
                onChange={props.onChangeSrcAmount}
                value={props.srcAmount}
              />
            }
            tokenSelect={<TokenSelect onClick={() => {}} />}
          />
          <Bottom
            usd={<USD value={props.srcUsd} />}
            balance={<Balance value={props.srcBalance} />}
          />
        </Main>
        <ChangeTokens onClick={props.onChangeTokens} />
        <Main>
          <Top label={props.destLabel || 'To'} />
          <Middle
            input={<TokenInput value={props.dstAmount} />}
            tokenSelect={<TokenSelect onClick={() => setOpen(true)} />}
          />
          <Bottom
            usd={<USD value={props.destUsd} />}
            balance={<Balance value={props.destBalance} />}
          />
        </Main>
        <SubmitButton
          isLoading={props.submitLoading}
          disabled={props.submitDisabled}
          onClick={props.onSubmit}
          text={props.submitText || ''}
        />
      </Container>
      <TokenModal open={open} onClose={() => setOpen(false)} tokens={[]} />
    </>
  );
};
Quickswap.Top = Top;
Quickswap.Middle = Middle;
Quickswap.TokenInput = TokenInput;
Quickswap.Balance = Balance;
Quickswap.USD = USD;
Quickswap.Container = Container;
Quickswap.Main = Main;
Quickswap.TokenSelect = TokenSelect;
Quickswap.Bottom = Bottom;
Quickswap.PercentButtons = PercentButtons;
Quickswap.ChangeTokens = ChangeTokens;
Quickswap.SubmitButton = SubmitButton;
