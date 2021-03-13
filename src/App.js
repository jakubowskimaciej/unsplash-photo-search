import React, { useState } from 'react';
import axios from './api/unsplash';

import SearchBar from './components/molecules/SearchBar/SearchBar';
import ImageList from './components/molecules/ImageList/ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (term) => {
    const res = await axios.get('/search/photos', {
      params: { query: term, per_page: 20 },
    });
    console.log(res);
    setImages(res.data.results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
