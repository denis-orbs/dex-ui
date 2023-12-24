import styled from 'styled-components'

interface Props{
    value?: string;
    symbol?: string;
    className?: string;
}


export function Balance({ value, symbol, className }: Props) {
  return (
    <Container className={className}>
      {value}
      {symbol}
    </Container>
  );
}



const Container = styled.div`

`;