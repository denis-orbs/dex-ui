import styled, { CSSProperties } from 'styled-components'

interface Props{
    value?: string;
    className?: string;
    css?: CSSProperties;
}


export function Balance({ value, className = '', css = {} }: Props) {
  return (
    <Container className={className} style={css}>
      <p> {`Balance: ${value}`}</p>
    </Container>
  );
}



const Container = styled.div`
  font-size: 14px;
`;