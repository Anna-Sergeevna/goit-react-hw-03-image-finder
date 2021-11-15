import { Component } from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// import PropTypes from 'prop-types';

class ImageGallery extends Component {
  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&q=${nextQuery}&key=23640925-62666e78aedb939489768c224`,
        )
          .then(r => r.json())
          .then(images => this.setState({ images }))
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    return (
      <>
        <ul className="imageGallery">
          {this.state.loading && <div>Загружаем...</div>}
          {!this.props.query && <div>Введите запрос</div>}
          {/* {this.props.images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
            />
          ))} */}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
