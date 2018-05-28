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

const scrs = require('.')

const cli = meow(`
  Usage:

    $ scrs App.js > index.html

  Options:

    --svg   Use SVG doctype instead of HTML

`, {
  flags: {
    svg: {
      type: 'boolean'
    }
  }
})

const [ file ] = cli.input
const opts = Object.assign({}, cli.flags)

const filename = path.isAbsolute(file) ? file : path.join(process.cwd(), file)

const Component = require(filename).default || require(filename)

const html = scrs(Component, opts)

if (opts.svg) {
  const svgDoctype = `<?xml version="1.0" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n`
  console.log(svgDoctype + html)
} else {
  console.log('<!DOCTYPE html>' + html)
}

require('update-notifier')({
  pkg: cli.pkg
}).notify()
