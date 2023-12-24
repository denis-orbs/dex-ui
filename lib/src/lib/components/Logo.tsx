import React from 'react';
import styled from 'styled-components';
export function Logo({ src }: { src?: string }) {
  return (
    <Container>
      <StyledImg src={src} />
    </Container>
  );
}

const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  oveflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
