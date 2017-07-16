#!/usr/bin/env node

/* global require process */
var exec = require('child_process').exec

const cwd = process.cwd().replace (/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-flow'
const root = cwd.endsWith(suffix) ? cwd.substr(0, cwd.length - suffix.length) : cwd

console.log(root)

function flowTypedUpdate() {
    exec('flow-typed update', {cwd: root}, (error) => {
        if (error) {
            console.error(`exec error: flow-ttped ${error}`) // eslint-disable-line no-console
            return
        }
        console.log('Flow-typed updated')  // eslint-disable-line no-console
    })
}

function installFlowBin() {
    exec('npm install --save-dev flow-bin', {cwd: root}, (error) => {
        if (error) {
            console.error(`exec error npm i: ${error}`) // eslint-disable-line no-console
            return
        }
        console.log('Flow Bin installed')  // eslint-disable-line no-console

        flowTypedUpdate()
    })
}

exec('flow init', {cwd: root}, (error) => {
    if (error) {
        console.error(`exec error init: ${error}`) // eslint-disable-line no-console
        return
    }
    console.log('Flow initialized')  // eslint-disable-line no-console

    installFlowBin()
})
