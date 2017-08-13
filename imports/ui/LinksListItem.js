import React from 'react';
import PropTypes from 'prop-types';

export default class LinksListItem extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.url}</h3>
        <p>{this.props.shortUrl}</p>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired
}
