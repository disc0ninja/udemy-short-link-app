import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  };
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      error: 'Something went wrong'
    });
  };

  render() {
    return (
      <div>
        <h1>Signup for a Shrt Lnk account</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined }
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password" />
          <button>Create Account</button>
        </form>
        <Link to="/">Have an account already?</Link>
      </div>
    );
  };
};
