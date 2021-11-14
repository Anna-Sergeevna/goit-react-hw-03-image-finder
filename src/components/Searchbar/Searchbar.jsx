import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'index.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    image: '',
  };

  handleChange = e => {
    this.setState({ image: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { image } = this.state;

    e.preventDefault();

    if (image.trim() === '') {
      toast.error('Enter the queryn');
      return;
    }

    this.props.onSubmit(image);
    this.reset();
  };

  reset = () => {
    this.setState({ image: '' });
  };

  render() {
    const { image } = this.state;

    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" disabled={!image} className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            name="image"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={image}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
