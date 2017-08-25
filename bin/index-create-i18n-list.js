#!/usr/bin/env node
'use strict';
const util = require('react-boilerplate-app-utils');
var scriptsPackagename = 'react-router-controller';
var packageJsonConfig = util.getDefaultCwdPackageJsonConfig(scriptsPackagename);
if (!packageJsonConfig) {
  scriptsPackagename = 'react-boilerplate-app-scripts';
  packageJsonConfig = util.getDefaultCwdPackageJsonConfig(scriptsPackagename);
}
var config = {
  saveDir: packageJsonConfig.appLocalePath || 'src/i18n',
  readDir: `${packageJsonConfig.appLocalePath}/excel` || 'src/i18n/excel',
};
require('./main/create-i18n-list')(config);
