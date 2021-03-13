import React, { useState } from 'react';

import { Wrapper, StyledForm } from './SearchBar.styles';

const SearchBar = (props) => {
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
        <label htmlFor="inputSearch">Input Search</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </StyledForm>
    </Wrapper>
  );
};

export default SearchBar;
