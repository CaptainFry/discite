'use strict';

Meteor.Schema = Meteor.Schema || {};

/**
 * User schema
 * Create in order to override meteor Account schema
 * @type {SimpleSchema}
 */
Meteor.Schema.UserProfile = new SimpleSchema({
    username: {
        type: String,
        label: 'Username'
    },
    firstName: {
        type: String,
        label: 'FirstName',
        optional: true
    },
    lastName: {
        type: String,
        label: 'LastName',
        optional:true
    }
});

Meteor.user.schema = new SimpleSchema({
    _id: {type: String},
    emails: {type: Array},
    'emails.$': {type: Object},
    'emails.$.address': {type: String},
    'emails.$.verified': {type: Boolean},
    createdAt: {type: Date},
    services: {type: Object, blackbox: true},
    profile: {type: Meteor.Schema.UserProfile}
});