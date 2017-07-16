#!/usr/bin/env node

/* global require process */
var exec = require('child_process').exec

var cwd = process.cwd().replace (/\\/g, '/')
var suffix = '/node_modules/preact-cli-plugin-flow'


if (cwd.endsWith(suffix)) {
    var root = cwd.substr(0, cwd.length - suffix.length)
    exec('flow init', {cwd: root}, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })

    exec('flow-typed update', {cwd: root}, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}
