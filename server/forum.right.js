'use strict';
/*global Forums:true*/
/**
 * Created by Youness on 04/02/2016.
 */

Forums.allow({
    insert: (userId) => {
        return !!userId;
    },
    update: (userId) => {
        return !!userId;
    },
    remove: () => {
        return false;
    }
});