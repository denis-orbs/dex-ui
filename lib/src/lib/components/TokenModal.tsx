import React from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { FlexColumn } from './styles';

interface Token {
  address: string;
  symbol: string;
}

export function TokenModal({
  tokens,
  open,
  onClose,
}: {
  tokens: Token[];
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose} open={open}>
      <StyledList>
        {tokens.map((it) => {
          return <div key={it.address}>{it.symbol}</div>;
        })}
      </StyledList>
    </Modal>
  );
}

const StyledList = styled(FlexColumn)`
`;
