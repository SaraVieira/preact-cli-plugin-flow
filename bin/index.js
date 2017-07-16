#!/usr/bin/env node

/* global require process */
var exec = require('child_process').exec

var cwd = process.cwd().replace (/\\/g, '/')
var suffix = '/node_modules/preact-cli-plugin-flow'

console.log(cwd.endsWith(suffix))

if (cwd.endsWith(suffix)) {
    var root = cwd.substr(0, cwd.length - suffix.length)

    console.log(root)

    exec('npm run setup', {cwd: root})
}
