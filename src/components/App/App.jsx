import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className="galleryList">
           <GalleryList 
             galleryList={galleryList}
             setGalleryList={setGalleryList}
          />
        </div>
        <img src="images/goat_small.jpg"/>
        <img src="imagine/Vinnie_Cat.jpg"/>
      </div>
    );
}

export default App;
