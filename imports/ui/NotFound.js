import React from 'react';
import {Link} from 'react-router';

export default() => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Hmm, we're unable to find that page.</p>
        <Link className="button button--link" to="/links">Home</Link>
      </div>
    </div>
  );
};
