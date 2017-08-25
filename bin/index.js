#!/usr/bin/env node
'use strict';

const path = require('path');
const commander = require('commander');
const util = require('react-boilerplate-app-utils');

//检测node版本
util.checkNodeVersion('v6.0.0');

const packageJson = path.resolve(__dirname, '../package.json');

commander
  .version(packageJson.version)
  .command('create-i18n-excel', 'Generate view i18n string to Excel lists')
  .command(
    'create-i18n-list',
    'Generate i18n string to config js file from excel'
  )
  .parse(process.argv);
