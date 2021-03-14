import styled from 'styled-components';

export const StyledLink = styled.a`
  display: block;
  margin: 0 auto;
  padding: 1rem;
  grid-row-end: span ${(props) => props.span};
`;

export const StyledImage = styled.img`
  padding: 1rem;
  width: 38rem;
`;
