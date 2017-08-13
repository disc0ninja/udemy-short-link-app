import React from 'react';

// Custom API Imports
import { Links } from '../api/links';

export default class AddLink extends React.Component {
  // AddLink
  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }

  render() {
    return(
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL to shorten"/>
          <button>Add Link</button>
        </form>
    </div>
    )
  }
}
