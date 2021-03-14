import React, { Component } from 'react';
import Loader from "react-loader-spinner";

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImages from './services/imageApi';
import Modal from './components/Modal'
import Button from "./components/Button";
import CloseBtn from './components/CloseBtn';

import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {

  state = {
    queryResult: '',
    images: [],
    page: 1,
    imageUrl: '',
    modalStatus: false,
    loaderStatus: false,
    error: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryResult !== this.state.queryResult) {
      this.fetchImages()
    }

    if (this.state.images.length > 12) {
      this.scrollToBottom()
    }
  }

  scrollToBottom = () => {
    let viewPortHeight = document.documentElement.clientWidth;
    window.scrollBy(0, viewPortHeight)
  }

  toggleModal = () => {
    this.setState(({ modalStatus }) => ({
      modalStatus: !modalStatus
    }))
  }

  fetchImages = () => {
    const { queryResult, page } = this.state;
    const q = queryResult
    const options = { q, page }
    this.setState(prevState => ({ page: prevState.page + 1, loaderStatus: true }));

    fetchImages(options)
      .then((images) => {
        if (images.length > 0) {
          this.setState((prevState) => ({ images: [...prevState.images, ...images] }))
        } else {
          this.setState({ error: true })
        }
      })
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loaderStatus: false }))
  }

  handleQuery = (query) => {
    if (query !== this.state.queryResult) {
      this.setState(({ queryResult: query, page: 1, images: [], error: false }))
    } else {
      alert('this request has already been completed')
    }
  }

  openModal = (url) => {
    this.setState({
      imageUrl: url,
    })
    this.toggleModal()
  }

  deleteImg = (imageId) => {
  
    console.log('id', imageId);
    console.log(this.state.images);

    //const mapImg = this.state.images.map(({id}) => console.log(id))
    //console.log("mapImg", mapImg)
    const filteredImages = this.state.images.filter(({ id }) => id != imageId);
     console.log('filteredImages', filteredImages)

      this.setState({images: filteredImages});    
  }



  render() {
    const { images, imageUrl, modalStatus, loaderStatus, error } = this.state;
    const renderBtn = images.length !== 0 && !loaderStatus;

    return (
      <div className="Container">
        <Searchbar onSendQuery={this.handleQuery} />
        {error && <h1 className="ErrorMessage">No result found!</h1>}
        {images.length > 0 && < ImageGallery images={images} onImageClick={this.openModal} handleClickBtn={this.deleteImg}/>}
        {loaderStatus && <Loader type="Circles" color=" #3f51b5" height={100} width={100} className="Loader" />}
        {renderBtn && <Button
          type="button"
          onClickBtn={this.fetchImages}
          className="Button" />}
        {!!modalStatus &&
          <Modal toggleModal={this.toggleModal}>
          <div className="modal">
            <img src={imageUrl} alt="pic" className="modal_img"/>
            <CloseBtn handleClickBtn={this.openModal} id={imageUrl} className="close_modal_btn"/>
            {/* <button className="close_modal_btn" onClick={this.openModal}>x</button> */}
          </div>
         
          </Modal>}
      </div>
    );
  }
}

export default App;

