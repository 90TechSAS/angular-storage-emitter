/**
 */

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'zlStorageEmitter', function ($scope, zlStorageEmitter) {

    $scope.events = [];

    console.info(zlStorageEmitter);
    $scope.emit = function (msg) {
        zlStorageEmitter.emit('myEvent', msg);
    };

    zlStorageEmitter.on('myEvent', function (e) {
        console.info(e);
        $scope.events.push(e);

    });
    console.info(zlStorageEmitter.listeners('myEvent'));

    zlStorageEmitter.emit('myEvent', 'HELLO');

}]);