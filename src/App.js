import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  // 仮の画像データ
  const images = [
    '/images/yoko.jpg',
    '/images/1poto.jpg',
    '/images/2poto.jpg',
    '/images/3poto.jpg',
    '/images/sam.jpg',
    '/images/sam2.jpg',
    // 他の画像...
  ];

  return (
    <Grid container spacing={3} justify="center" alignItems="center">

      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <img src={process.env.PUBLIC_URL + image} alt={`portfolio ${index + 1}`} className="responsive-image" />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;