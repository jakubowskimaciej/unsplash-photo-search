import React from 'react';
import ImageCard from '../../atoms/ImageCard/ImageCard';
import { Wrapper } from './ImageList.styles';

const ImageList = ({ images }) => {
  const image = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <Wrapper>{image}</Wrapper>;
};

export default ImageList;
