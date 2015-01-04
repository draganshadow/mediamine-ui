define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('UserLogoutMain', ['user', function (user) {
        console.log(user);
        user.logout();
    }]);
});
