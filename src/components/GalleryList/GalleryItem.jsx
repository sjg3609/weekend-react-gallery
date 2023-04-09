function GalleryItem({images, galleryList}) {

    return (
        <div className="galleryItem">
        {
            <img key={images.id} src={images.path}/> 
        }
        </div>
    )
}

export default GalleryItem;