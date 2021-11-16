import { Component } from 'react';
import ImagesErrorView from './ImagesErrorView';
import ImagesDataView from './ImagesDataView';
import ImagesPendingView from './ImagesPendingView';
import ImagesIdleView from './ImagesIdleView';
import imagesAPI from '../../services/pixabay-api';
import Modal from '../Modal/Modal';

// import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  // static propTypes = {
  // };

  state = {
    images: [],
    // error: null,
    status: Status.IDLE,
    showModal: false,
    page: 1,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      imagesAPI
        .fetchImages(nextQuery)
        .then(images => {
          if (images.hits.length === 0) {
            throw Error();
          }
          this.setState({ images: images.hits, status: Status.RESOLVED });
        })
        .catch(error => this.setState({ status: Status.REJECTED }));
    }
  }

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { images, status, largeImageURL, showModal } = this.state;

    if (status === Status.IDLE) {
      return <ImagesIdleView />;
    }

    if (status === Status.PENDING) {
      return <ImagesPendingView />;
    }

    if (status === Status.REJECTED) {
      return <ImagesErrorView message={'Sorry we nothing found for you'} />;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          {showModal && (
            <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
          )}
          <ImagesDataView images={images} onClick={this.toggleModal} />
        </>
      );
    }
  }
}

export default ImageGallery;
