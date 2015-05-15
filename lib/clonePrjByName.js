'use strict';

var findByProjectName = require('./findByProjectName.js');
var getProject = require('./getProject.js');
var clonePrj = require('./clonePrj.js');

var assert = require('assert');

var winston = require('winston', false);
winston.level = 'info';

var clonePrjByName = function clonePrjByName(redmine, projectName, newName) {

  assert(typeof projectName === 'string');
  assert(typeof newName === 'string');

  getProject(redmine, findByProjectName(projectName), function (srcPrj) {
    clonePrj(redmine, srcPrj, newName).error(function (err) {
      winston.log('info', '---------------------');
      winston.log('info', 'error cloning project');
      winston.log('info', '---------------------');
      winston.log('info', err);
      throw err;
    });
  });
};

module.exports = clonePrjByName;