'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the stunning ${chalk.red('generator-jb-docker')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'sourceImage',
        message: 'Image to use for FROM instruction',
        default: 'ubuntu'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    this.composeWith(require.resolve('../dockerfile'), {
      sourceImage: this.props.sourceImage
    });
  }
};
