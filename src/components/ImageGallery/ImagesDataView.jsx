import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImagesDataView({ images, onClick }) {
  return (
    <ul className="imageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default ImagesDataView;
