import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  grid-gap: 0 1rem;
  grid-auto-rows: 1rem;

  @media ${(props) => props.theme.mediaQueries.small} {
    grid-auto-rows: 1.1rem;
  }
`;
