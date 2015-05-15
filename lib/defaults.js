'use strict';

var rpg = require('rpg'); // random password generator

exports.user = {
  must_change_passwd: function must_change_passwd() {
    return true;
  },
  auth_source_id: function auth_source_id() {
    return 'regionemarche.intra';
  },
  password: rpg
};

exports.paramsGetProjects = {
  include: 'enabled_modules,trackers,issue_categories'
};