import React from 'react';
import styled, { CSSProperties } from 'styled-components';
interface Props {
  className?: string;
  value?: string;
  prefix?: string;
  css?: CSSProperties;
}

export function USD({ className, value, prefix = '≈ $ ', css = {} }: Props) {
  return (
    <Container className={className} style={css}>
      <p>{`${prefix}${value}`}</p>
    </Container>
  );
}

const Container = styled.div`
  font-size: 14px;
`;
