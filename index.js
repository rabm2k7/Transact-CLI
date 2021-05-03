const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');

//const argv = require('minimist')(process.argv.slice(2));
//console.log(argv._[0]);

clear();

console.log(
  chalk.rgb(61, 252, 3).bold(
    figlet.textSync('ZenSub', { horizontalLayout: 'full' })
    //font: 'Doh',
  )
);
console.log(chalk.rgb(61, 252, 3).bold('[1] Create Acc!'));

const run = async () => {
  const credentials = await inquirer.askQuestions();
  console.log(credentials);
  run();
};

run();



/*
figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(fonts);
});
*/


