import React from 'react';
import { Wrapper } from './ImageList.styles';

import ImageCard from '../../atoms/ImageCard/ImageCard';

const ImageList = ({ images }) => {
  const image = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <Wrapper>{image}</Wrapper>;
};

export default ImageList;
