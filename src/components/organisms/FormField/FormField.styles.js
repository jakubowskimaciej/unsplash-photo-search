import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 65%;
  height: 9.5rem;
  margin: 1rem auto;
  border: 0.1rem solid var(--shadow);
  border-radius: 0.7rem;
  box-shadow: 0 0.5rem 1rem -0.8rem var(--color-primaryLight);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
`;

export const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  padding: 0.8rem 2rem;
  border: 0.1rem solid var(--shadow);
  outline: none;
  border-radius: 5rem;
  transition: 0.3s all;

  &:active,
  &:focus {
    box-shadow: 0 0.5rem 1rem -0.8rem var(--color-primaryLight);
  }
`;
