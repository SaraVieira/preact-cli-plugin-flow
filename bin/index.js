#!/usr/bin/env node

/* global require process */
const exec = require('child_process').exec
const ora = require('ora')

const cwd = process.cwd().replace (/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-flow'
const root = cwd.endsWith(suffix) ? cwd.substr(0, cwd.length - suffix.length) : cwd
const spinner = ora('Loading unicorns').start()

function flowTypedUpdate() {
    spinner.start('Running flow typed')
    exec('flow-typed update', {cwd: root}, (error) => {
        if (error) {
            spinner.fail(`exec error: flow-ttped ${error}`)
            return
        }
        spinner.succeed('Flow-typed updated')
    })
}

function installFlowBin() {
    spinner.start('Installing Flow Bin')
    exec('npm install --save-dev flow-bin', {cwd: root}, (error) => {
        if (error) {
            spinner.fail(`exec error npm i: ${error}`)
            return
        }
        spinner.succeed('Flow Bin installed')

        flowTypedUpdate()
    })
}

exec('flow init', {cwd: root}, (error) => {
    spinner.start('Flow is initializing')
    if (error) {
        spinner.fail(`exec error init: ${error}`)
        return
    }
    spinner.succeed('Flow initialized')

    installFlowBin()
})
