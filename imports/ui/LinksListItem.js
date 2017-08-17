import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import moment from 'moment';
import Links from '../api/links';

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

  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits'
    let visitedMessage = null;

    if (typeof this.props.lastVisitedAt === 'number') {
      visitedMessage =`(visited ${moment(this.props.lastVisitedAt).fromNow()})`
    }

    return <p>{this.props.visitedCount} {visitMessage} - {visitedMessage}</p>
  }

  render() {
    return(
      <div>
        <h3>{this.props.url}</h3>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <a className="button button--pill button--link" href={this.props.shortUrl} target="_blank">
          Visit
        </a>
        <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl} >{ this.state.justCopied ? 'Copied' : 'Copy' }</button>
        <button className="button button--pill" onClick={() => { Meteor.call('links.setVisibility', this.props._id, !this.props.visible)}}>
          {this.props.visible ? 'Hide' : 'Unhide'}
        </button>
      </div>
    )
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
}
