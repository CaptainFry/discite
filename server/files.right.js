'use strict';
/*global Files:true*/
/**
 * Collections files actions rigths
 */
Files.allow({
    insert: (userId) => {
        return !!userId;
    },
    update: (userId) => {
        return !!userId;
    },
    remove: (userId) => {
        return !!userId;
    },
    download: (userId) => {
        return !!userId;
    }
});