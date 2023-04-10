import axios from 'axios';

function GalleryItem({images, galleryList, fetchGallery}) {

    const updateLikes = (e) => {
        axios.put(`gallery/like/${images.id}`).then((response) => {
            console.log(response);
            fetchGallery();
        }).catch((error) => {
            console.log(`Error in updateLikes, ${error}`);
            alert('Something went wrong in updateLikes!');
        });
    }

    return (
        <div className="galleryItem">
        { <img key={images.id} src={images.path}/> }
        <br/>
        <button onClick={(e) => updateLikes(e)}>Like</button>  {images.likes} people like this!
        <br/>
        </div>
    )
}

export default GalleryItem;