import axios from "axios";
import PropTypes from 'prop-types';

const BASE_URL = "https://pixabay.com/api";
const API_KEY = '19685928-f191ac91b9da632ea9a4b744f';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12
}

const fetchImages = ({ q, page = 1 }) => {
    return axios
        .get('', { params: { q, page } })
        .then(res => res.data.hits)
}

fetchImages.propTypes = {
    queryResult: PropTypes.string,
    page: PropTypes.number
};

export default fetchImages;