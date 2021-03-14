import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onImageClick, handleClickBtn }) => {
    return (
        <ul className="ImageGallery">
            {images.map((image) => (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                    onImageClick={onImageClick}
                    handleClickBtn={handleClickBtn}
                />))
            }
        </ul>
    )
}

ImageGallery.protoType = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
    ImageGalleryItem: PropTypes.elementType
}

export default ImageGallery;