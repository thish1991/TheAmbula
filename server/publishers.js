import {Meteor} from 'meteor/meteor';

import {YoutubeVideos} from '../imports/api/youtubevideos.js';
//
Meteor.publish("search-videos", function (query) {
    check(query, String);

    return YoutubeVideos.find({videoTitle: {$regex: query, $options: '-i'}});
});


Meteor.publish("search-videos-by-owner", function (owner) {
    check(owner, String);

    return YoutubeVideos.find({owner: owner});
});

Meteor.publish("get-user-by-id", function () {
    return Meteor.users.find({}, {fields: {profile: 1}});
});



