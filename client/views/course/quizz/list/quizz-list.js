'use strict';
/*global Quizzs:true*/

Template.quizzListTpl.helpers({
    quizzs: function(){
        Meteor.subscribe('quizzs');
        console.log("quizz finded");
        return Quizzs.find();
    }
});