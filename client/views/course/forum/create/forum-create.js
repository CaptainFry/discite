'use strict';

Template.forumCreateTpl.rendered = function(){
    const hookObj = {
        before: {
            insert: function (doc) {
                doc.courseId = Router.current().params.idCourse;
                return doc;
            }
        }
    };

    AutoForm.addHooks('insertForumForm', hookObj, true);
};