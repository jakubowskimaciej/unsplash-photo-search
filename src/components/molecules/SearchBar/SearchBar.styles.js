import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 65%;
  min-height: 7rem;
  margin: 1rem auto;
  border: 0.1rem solid var(--shadow);
  border-radius: 0.5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  label {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }

  input {
    padding: 1rem 2rem;
    outline: none;
    color: var(--color-primaryLight);
    border: 1px solid var(--shadow);
    border-radius: 5rem;
  }
`;
