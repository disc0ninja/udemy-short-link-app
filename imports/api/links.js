import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('linksPub', function () {
    return Links.find( { userId: this.userId } );
  });
}

Meteor.methods({
  'links.insert'(url){
    if (!this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    try {
      new SimpleSchema({
        url: {
          type: String,
          label: 'Your link',
          regEx: SimpleSchema.RegEx.Url
        }
      }).validate({ url });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }
      Links.insert({
        url,
        userId: this.userId
    })
  }
});
