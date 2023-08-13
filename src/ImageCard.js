import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

function ImageCard({ image }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
      />
    </Card>
  );
}

export default ImageCard;
