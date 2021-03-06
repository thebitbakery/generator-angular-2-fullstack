'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-angular-2-fullstack') + ' generator!'
    ));

    var prompts = [{
      type: 'list',
      name: 'markup',
      message: 'What would you like to write markup with?',
      choices: ['HTML', 'Jade'],
      filter: val => val.toLowerCase()
    },{
      type: 'list',
      name: 'stylesheet',
      default: 1,
      message: 'What would you like to write stylesheets with?',
      choices: ['CSS', 'Sass', 'Stylus', 'Less'],
      filter: val => val.toLowerCase()
    }, {
      type: 'list',
      name: 'router',
      default: 1,
      message: 'What Angular router would you like to use?',
      choices: ['ngRoute', 'uiRouter'],
      filter: val => val.toLowerCase()
    }, {
      type: 'confirm',
      name: 'bootstrap',
      message: 'Would you like to include Bootstrap?'
    }, {
      type: 'confirm',
      name: 'uibootstrap',
      message: 'Would you like to include UI Bootstrap?',
      when: answers => answers.bootstrap
    }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;
      done();
    }.bind(this));
  },

  writing: function () {
    // console.log('Answer has: ');
    // console.log(this.props);
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
