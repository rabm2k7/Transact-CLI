const inquirer = require('inquirer');
const files = require('./files.js');

inquirer.registerPrompt("search-list", require("inquirer-search-list"));

module.exports = {
  askQuestions: () => {
    const questions = [
      {
            type: "search-list",
            message: "Select Recipe",
            name: "recipe",
            choices: ["X","Y","Z"],
            validate: function(answer) {
                if (!(answer)) {
                    return `Whoops, ${answer} is not a real topping.`;
                }
                return true;
            }
      },
      {
            type: "search-list",
            message: "Select Recipe",
            name: "recipe2",
            choices: ["Z","Z","Z"],
            validate: function(answer) {
                if (!(answer)) {
                    return `Whoops, ${answer} is not a real topping.`;
                }
                return true;
            }
      }
    ];
    return inquirer.prompt(questions);
  },
};

