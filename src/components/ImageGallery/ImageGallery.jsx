import { Component } from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImagesErrorView from './ImagesErrorView';
import ImagesDataView from './ImagesDataView';
import ImagesPendingView from './ImagesPendingView';
import imagesAPI from '../../services/pixabay-api';
import Modal from '../Modal/Modal';
// import Modal from 'components/Modal';

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
    error: null,
    status: Status.IDLE,
    showModal: false,
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
            throw new Error();
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
    const { images, status, showModal } = this.state;

    if (status === Status.IDLE) {
      return <div>Please enter your search</div>;
    }

    if (status === Status.PENDING) {
      return <ImagesPendingView />;
    }

    if (status === Status.REJECTED) {
      return <ImagesErrorView message={'error.message'} />;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          {showModal && (
            <Modal
              onClick={this.toggleModal}
              largeImageURL={this.state.largeImageURL}
            />
          )}
          <ImagesDataView images={images} onClick={this.toggleModal} />
        </>
      );
    }
  }
}

export default ImageGallery;
