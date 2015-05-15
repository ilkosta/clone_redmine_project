'use strict';

var util = require('util');

var getProject = require('./getProject.js');
var mkNewProjectData = require('./data_struct/mkNewProjectData.js');
var winston = require('winston');
winston.level = 'info';

var assert = require('assert');

var cloneMemberships = require('clone_redmine_memberships');

var clonePrj = function clonePrj(redmine, srcPrj, newName) {
    assert(typeof srcPrj === 'object');
    assert(typeof newName === 'string');

    var prog = mkNewProjectData(srcPrj, newName);

    return redmine.post('projects', { project: prog }).success(function (res) {
        cloneMemberships(redmine, srcPrj, prog);
    }).success(function (results) {
        if (results) results.forEach(function (m) {
            winston.log('debug', m);
        });
    });
};

module.exports = clonePrj;