import { Component } from 'react';
// import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
