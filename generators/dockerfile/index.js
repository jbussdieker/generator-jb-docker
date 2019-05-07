'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.options.template || this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile'),
      {
        ...this.options
      }
    );
  }
};
