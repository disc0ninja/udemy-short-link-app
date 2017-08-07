import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup for a Shrt Lnk account</h1>
        {/* signup form here */}
        <Link to="/">Have an account already?</Link>
      </div>
    );
  };
};
