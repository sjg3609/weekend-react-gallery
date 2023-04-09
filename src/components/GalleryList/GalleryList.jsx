import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem';

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
            {/* Tested to see if it looped over the gallery */}
            {/* {JSON.stringify(galleryList)} */}
            {
                 galleryList.map((images) => (
                    <GalleryItem 
                        images={images}
                        galleryList={galleryList}
                        fetchGallery={fetchGallery}
                     />
                 ))

            }
           
            
            
        </div>
    )
}

export default GalleryList;