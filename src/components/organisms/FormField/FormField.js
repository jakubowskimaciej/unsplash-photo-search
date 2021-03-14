import React, { useState } from 'react';
import {
  Wrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
} from './FormField.styles';

const FormField = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputValue);
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledLabel htmlFor="photo-search">Photo search</StyledLabel>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </StyledForm>
    </Wrapper>
  );
};

export default FormField;
