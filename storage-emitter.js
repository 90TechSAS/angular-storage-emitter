/**
 @fileOverview

 @toc

 */

'use strict';
var sEmitter = require('storage-emitter');

angular.module('90TechSAS.angular-storage-emitter', [])
    .factory('zlStorageEmitter', [function () {

        var self = {
            on  : sEmitter.on,
            emit: sEmitter.emit,
            off : sEmitter.off
        };

        return sEmitter;
    }]);