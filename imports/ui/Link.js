import React from 'react';
import { Meteor } from 'meteor/meteor';

// Component Imports
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksList from './LinksList';

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader title="Your Links"/>
        <LinksList />
        <AddLink />
      </div>
    );
  };
};
