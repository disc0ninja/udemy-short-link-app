import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

// Create a boolean state called justCopied. Default to false
// On success switch justCopied to true
// Wait a second. Switch justCopied to false

// Dynamically render the button text. true => Copied. false => Copy

export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      justCopied: false
    }
  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({justCopied: true});
      setTimeout( () => this.setState({ justCopied: false }), 1000);
    }).on('error', () => {
      console.log('unable to copy');
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return(
      <div>
        <h3>{this.props.url}</h3>
        <p>{this.props.shortUrl}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl} >{ this.state.justCopied ? 'Copied' : 'Copy' }</button>
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
