import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className="ImageGallery">
            <ImageGalleryItem images={images} onImageClick={onImageClick} />
        </ul>
    )
}

ImageGallery.protoType = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
    ImageGalleryItem: PropTypes.elementType
}

export default ImageGallery;