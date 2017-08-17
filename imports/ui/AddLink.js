import React from 'react';
import Modal from 'react-modal';

// Custom API Imports
import { Links } from '../api/links';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
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

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        // this.setState({ url: '', isOpen: false, error: ''})
        this.handleModalClose();
      } else {
        this.setState({error: err.reason});
      }
    });
  }

  handleModalClose() {
    this.setState({isOpen: false, url: '', error: ''});
  }

  render() {
    return(
      <div>
        <button className="button" onClick={() => this.setState({isOpen: true})}>
          + Add Link
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={() => this.handleModalClose()}>
          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined }
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
               type="text" ref="url" placeholder="URL to shorten" ref="url" value={this.state.url} onChange={this.onChange.bind(this)}/>
            <button>Add Link</button>
          </form>
          <button onClick={() => this.handleModalClose()}>Cancel</button>
        </Modal>

      </div>
    )
  }
}
