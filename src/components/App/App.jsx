import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
      axios.get('/gallery').then((response) => {
        setGalleryList(response.data);
      }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something went wrong in GET!');
      })
  }

    useEffect(() => {
      fetchGallery();
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
          {
            galleryList.map((images, id) => (
              <li>
                <img key={id} src={images}/>
              </li>
            ))
          }
        </ul>
        <img src="images/goat_small.jpg"/>
        {/* <GalleryList /> */}
      </div>
    );
}

export default App;
