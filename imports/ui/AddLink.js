import React from 'react';

// Custom API Imports
import { Links } from '../api/links';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  // AddLink
  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    });
  };

  onSubmit(e) {
    const { url } = this.state

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({ url: ''})
        }
      });
    }
  }

  render() {
    return(
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
             type="text" ref="url" placeholder="URL to shorten" value={this.state.url} onChange={this.onChange.bind(this)}/>
          <button>Add Link</button>
        </form>
    </div>
    )
  }
}
