#!/usr/bin/env node
require('babel-register')({
  presets: [
    'babel-preset-env',
    'babel-preset-stage-0',
    'babel-preset-react'
  ].map(require.resolve)
})
const path = require('path')
const meow = require('meow')

const scrs = require('..')

require('update-notifier')({
  pkg: require('../package.json')
}).notify()

const cli = meow(`
  Usage:

    $ scrs App.js > index.html

`)

const [ file ] = cli.input

const filename = path.isAbsolute(file) ? file : path.join(process.cwd(), file)

const Component = require(filename).default || require(filename)

const html = scrs(Component)

console.log('<!DOCTYPE html>' + html)
