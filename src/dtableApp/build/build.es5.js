﻿'use strict';

var html2js = require('html2js');
var concat = require('concat');
require('pipe').install();

html2js({
  outputModuleName: 'templates',
  base: 'app',
  rename: function rename(name) {
    return './' + name;
  },
  useStrict: true
}) | concat('templates.js');

