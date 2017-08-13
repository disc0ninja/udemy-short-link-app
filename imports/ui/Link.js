import React from 'react';
import { Meteor } from 'meteor/meteor';

// Component Imports
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksList from './LinksList';

export default () => {
  return(
    <div>
      <PrivateHeader title="Your Links"/>
      <LinksList/>
      <AddLink/>
    </div>
  )
}
