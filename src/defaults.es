var rpg = require('rpg'); // random password generator

exports.user = {
  must_change_passwd: () => true, 
  auth_source_id: () => 'regionemarche.intra',
  password: rpg
};

exports.paramsGetProjects = {
  include: 'enabled_modules,trackers,issue_categories'
};
