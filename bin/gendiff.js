#!/usr/bin/env node
const { program } = require('commander');

program
  .version('0.2.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .arguments('<firstConfig> <secondConfig>')
  program.parse();