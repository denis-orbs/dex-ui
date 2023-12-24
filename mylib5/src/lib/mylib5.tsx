import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Mylib5Props {}

const StyledMylib5 = styled.div`
  color: pink;
`;

export function Mylib5(props: Mylib5Props) {
  return (
    <StyledMylib5>
      <h1>Welcome to Mylib5!</h1>
    </StyledMylib5>
  );
}

export default Mylib5;
