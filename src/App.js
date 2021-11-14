import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from 'components/Container';
// import Loader from 'components/Loader';
// import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
// import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
// import Button from 'components/Button';

import './App.css';

class App extends Component {
  state = {
    image: '',
  };

  onSubmit = image => {
    this.setState({ image });
  };

  render() {
    return (
      <Container title="Поиск изображений">
        <Searchbar onSubmit={this.onSubmit} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
