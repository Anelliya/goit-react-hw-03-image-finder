import PropTypes from 'prop-types';
import {useState} from "react";

import CloseBtn from "./CloseBtn";

import defaultImage from '../images/image.jpg'

const ImageGalleryItem = ({ image, onImageClick, handleClickBtn }) => {
    const [hover, setHover] = useState(false);

    const { webformatURL, largeImageURL, id, tags } = image;

    const nandleClick = ev => {
        onImageClick(ev.target.srcset)
    }

    const handleClickDelBtn = (ev) => {
        handleClickBtn(ev.target.id)
    
    }

    const showBtn = () => {
        setHover(true)
    }

    const notShowBtn = () => {
        setHover(false)
    }

    return (
        <li className="ImageGalleryItem" key={id} id={id} onMouseOver={showBtn} onMouseLeave={notShowBtn}>
            <div className="img_gallery_overlay">
                <img src={webformatURL}
                srcSet={largeImageURL}
                alt={tags} className="ImageGalleryItem-image"
                onClick={nandleClick} />
                {hover && <CloseBtn className="close_modal_btn" id={id} handleClickBtn={handleClickDelBtn}/>}
           </div>
        </li >
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