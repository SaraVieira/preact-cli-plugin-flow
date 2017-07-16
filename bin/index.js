#!/usr/bin/env node

console.log('running')

/* global require process */
var exec = require('child_process').exec

var cwd = process.cwd().replace (/\\/g, '/')
var suffix = '/node_modules/preact-cli-plugin-flow'

console.log(cwd.endsWith(suffix), cwd)

if (cwd.endsWith(suffix)) {
    var root = cwd.substr(0, cwd.length - suffix.length)

    console.log(root)

    exec('npm run setup', {cwd: root}, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}
