import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 2, 3, 4, 1, 6, 9, 2, 9, 3];
const uniqueNums = lodash.uniq(array);
console.log(chalk.blue(uniqueNums));

console.log(chalk.cyan("Hello"));