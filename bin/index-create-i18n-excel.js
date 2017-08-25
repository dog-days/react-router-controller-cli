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
  language: packageJsonConfig.language,
  readDir: packageJsonConfig.appSrcPath || 'src',
  excelSaveDir: `${packageJsonConfig.appLocalePath}/excel` || 'src/i18n/excel',
};

require('./main/create-i18n-excel')(config);
