import axios from 'axios';
import { useState } from 'react';

function GalleryItem({images, galleryList, fetchGallery}) {

    const [toggle, setToggle] = useState(false);

    const updateLikes = (e) => {
        axios.put(`gallery/like/${images.id}`).then((response) => {
            console.log(response);
            fetchGallery();
        }).catch((error) => {
            console.log(`Error in updateLikes, ${error}`);
            alert('Something went wrong in updateLikes!');
        });
    }

    const showDescription = () => {
        // testing to see if I can use onClick on an img tag
        console.log('Does this work???');
        if (toggle === true) {
            return (
                <div style={{width: 200, height: 200, color: 'gray'}}>
                    {images.description}
                </div>
            );
        }
    }

    return (
        <div className="galleryItem">
        { <img key={images.id} src={images.path} onClick={showDescription}/> }
        <br/>
        <button onClick={(e) => updateLikes(e)}>Like</button>  {images.likes} people like this!
        <br/>
        </div>
    )
}

export default GalleryItem;