first experiment with https://github.com/malko/node-promised-redmine. Try to use with something like

```javascript
var util          = require('util');
var winston       = require('winston');
    winston.level = 'info';

var redmine         = require('./utils/redmine.js');
var clonePrjByName  = require('clone_redmine_project').cloneByName;

clonePrjByName(redmine, fromPrjName, destPrjName );

```
