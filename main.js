import lodash from 'lodash';
import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import colors from 'colors';
import validator from 'validator';

let fakeAccount = {
    userId: faker.string.uuid(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    registerAt: faker.date.past()
};

console.log(fakeAccount.userId);
console.log(fakeAccount.userName)
console.log(fakeAccount.email)
console.log(fakeAccount.registerAt)

const validEmail = 'shiro@gmail.com';
const invalidEmail = 'serika@231';

console.log(validEmail.cyan, validator.isEmail(validEmail));
console.log(invalidEmail.red, validator.isEmail(invalidEmail));

const array = [1, 2, 3, 4, 1, 6, 9, 2, 9, 3];
const uniqueNums = lodash.uniq(array);
console.log(chalk.blue(uniqueNums));

console.log(chalk.cyan("Hello"));