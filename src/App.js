import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  // 仮の画像データ
  const images = [
    'poto1260700.jpg',
    'poto1260700.jpg',
    'poto1260700.jpg',
   'poto1260700.jpg'
    // 他の画像...
  ];

  return (
    <Grid container spacing={3} justify="center" alignItems="center">

      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <img src={`/${image}`} alt={`Image ${index + 1}`} className="responsive-image" />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;