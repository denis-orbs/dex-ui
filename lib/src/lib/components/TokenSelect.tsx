import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { FlexRow } from './styles';

interface TokenSelectProps {
  symbol?: string;
  logoUrl?: string;
  onClick: () => void;
}

export const TokenSelect = ({ symbol, logoUrl,  onClick }: TokenSelectProps) => {
  return (
    <StyledTokenSelect $selected={!!symbol} onClick={onClick}>
      <Logo src={logoUrl} />
      <p>{symbol}</p>
    </StyledTokenSelect>
  );
};

const StyledTokenSelect = styled(FlexRow)<{ $selected: boolean }>`
  width: fit-content;
  padding: 8px 13px 8px 8px;
  border-radius: 38px;
  background: ${({ $selected }) =>
    $selected
      ? 'rgb(64, 69, 87)'
      : 'linear-gradient(105deg, rgb(68, 138, 255) 3%, rgb(0, 76, 230))'};
`;
