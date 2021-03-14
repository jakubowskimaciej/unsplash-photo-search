import React, { useState } from 'react';
import axios from './api/unsplash';
import ImageList from './components/molecules/ImageList/ImageList';
import FormField from './components/organisms/FormField/FormField';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (term) => {
    const res = await axios.get('/search/photos', {
      params: { query: term, per_page: 20 },
    });
    setImages(res.data.results);
  };

  return (
    <div>
      <FormField onSubmit={handleSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
