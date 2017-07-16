#!/usr/bin/env node

/* global require process */
var exec = require('child_process').exec

var cwd = process.cwd().replace (/\\/g, '/')
var suffix = '/node_modules/preact-cli-plugin-flow'

function flowTypedUpdate() {
    exec('flow-typed update', {cwd: root}, (error) => {
        if (error) {
            console.error(`exec error: ${error}`) // eslint-disable-line no-console
            return
        }
        console.log('Flow-typed updated')  // eslint-disable-line no-console
    })
}

function installFlowBin() {
    exec('npm install --save-dev flow-bin', {cwd: root}, (error) => {
        if (error) {
            console.error(`exec error: ${error}`) // eslint-disable-line no-console
            return
        }
        console.log('Flow Bin installed')  // eslint-disable-line no-console

        flowTypedUpdate()
    })
}

if (cwd.endsWith(suffix)) {
    var root = cwd.substr(0, cwd.length - suffix.length)
    exec('flow init', {cwd: root}, (error) => {
        if (error) {
            console.error(`exec error: ${error}`) // eslint-disable-line no-console
            return
        }
        console.log('Flow initialized')  // eslint-disable-line no-console

        installFlowBin()
    })
}
