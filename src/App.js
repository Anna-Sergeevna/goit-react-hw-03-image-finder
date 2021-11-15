import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from 'components/Container';
// import Loader from 'components/Loader';
// import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import Button from 'components/Button';

import './App.css';

class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <Container title="Поиск изображений">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={query} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
