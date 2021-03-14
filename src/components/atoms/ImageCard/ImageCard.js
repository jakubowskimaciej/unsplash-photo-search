import React, { useLayoutEffect, useRef, useState } from 'react';

import { StyledLink, StyledImage } from './ImageCard.styles';

const ImageCard = ({ image }) => {
  const ref = useRef(null);
  const [spans, setSpans] = useState(0);

  const change = () => {
    const height = ref.current.clientHeight;
    const pictureSpan = Math.ceil(height / 10);
    setSpans(pictureSpan);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener('load', change);
  });

  return (
    <StyledLink
      href={image.urls.full}
      target="blank"
      rel="noopener noreferrel"
      span={spans}
    >
      <StyledImage
        ref={ref}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </StyledLink>
  );
};

export default ImageCard;
