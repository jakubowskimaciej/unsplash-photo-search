import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  padding: 1rem;
  width: 38rem;
  grid-row-end: span ${(props) => props.span};
`;

const StyledLink = styled.a`
  display: block;
  margin: 0 auto;
  padding: 1rem;
  width: 38rem;
  grid-row-end: span ${(props) => props.span};
`;

const ImageCard = ({ image }) => {
  const ref = useRef(null);
  const [spans, setSpans] = useState(0);

  const change = () => {
    const height = ref.current.clientHeight;
    const pictureSpans = Math.ceil(height / 10);
    setSpans(pictureSpans);
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
      <StyledImg
        ref={ref}
        src={image.urls.regular}
        alt={image.alt_description}
        span={spans}
      />
    </StyledLink>
  );
};

export default ImageCard;
