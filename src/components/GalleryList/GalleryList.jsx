import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryList({galleryList, setGalleryList}) {

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
        <div>
        {
            galleryList.map((images) => (
                <img key={images.id} src={images.path}/> 
            ))
        }
        </div>
    )
}

export default GalleryList;