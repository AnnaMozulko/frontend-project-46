#!/usr/bin/env node
import { program } from'commander';
import genDiff from '../src/index.js';

program
  .version('0.2.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(genDiff(firstConfig, secondConfig, program.format));
  })
  .parse(process.argv);