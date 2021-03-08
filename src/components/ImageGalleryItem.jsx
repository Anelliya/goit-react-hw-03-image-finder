import PropTypes from 'prop-types';

import defaultImage from '../images/image.jpg'

const ImageGalleryItem = ({ images, onImageClick }) => {

    const nandleClick = ev => {
        onImageClick(ev.target.srcset)
    }
    return (
        images.map(({ webformatURL, largeImageURL, id, tags }) => (
            < li className="ImageGalleryItem" key={id}>
                <img src={webformatURL} srcSet={largeImageURL} alt={tags} className="ImageGalleryItem-image" onClick={nandleClick} />
            </li >
        ))
    )
}

ImageGalleryItem.defaultProps = {
    images: [],
    src: defaultImage,
    srcSet: defaultImage,
    alt: 'photo'
};

ImageGalleryItem.protoType = {
    images: PropTypes.arrayOf(PropTypes.exact({
        src: PropTypes.string,
        srcSet: PropTypes.string,
        tags: PropTypes.string,
    })),
    onImageClick: PropTypes.func
}

export default ImageGalleryItem;