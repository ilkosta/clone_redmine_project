'use strict';

var defaults = require('./defaults.js');

var util = require('util');
var assert = require('assert');

var winston = require('winston');
winston.level = 'info';

var getProject = function getProject(redmine, finder, cb) {
  var itNum = arguments[3] === undefined ? 0 : arguments[3];

  var par = defaults.paramsGetProjects;
  par.limit = 25;
  par.offset = itNum * par.limit;

  winston.log('debug', 'ricerca del progetto, richiesta nr ' + (itNum + 1) + ' - ' + util.inspect(par));

  redmine.getProjects(par).success(function (ps) {

    var found = finder(ps);

    if (found instanceof Array) {
      if (found.length > 0) {
        return cb(found);
      }
    } else if (typeof found === 'object') {
      if (found) {
        return cb(found);
      }
    }

    if (ps.total_count >= ps.limit * itNum) return getProject(redmine, finder, cb, ++itNum);else return cb(null);
  }).error(function (err) {
    winston.log('info', err);
  });
};

module.exports = getProject;