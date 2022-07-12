const fs = require('fs');
const inquirer = require('inquirer');

//Objects
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const teamArr = [];