#!/usr/bin/env node
const exec = require('child_process').exec
const ora = require('ora')
const path = require('path')
const fs = require('fs')

const cwd = process.cwd().replace(/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-flow'
const root = cwd.endsWith(suffix)
    ? cwd.substr(0, cwd.length - suffix.length)
    : cwd
const spinner = ora('Loading unicorns').start()
const srcPath = path.join(cwd, '.flowconfig')
const dstPath = path.join(root, '.flowconfig')
const flowConfig = fs.readFileSync(srcPath)

function flowTypedUpdate() {
    spinner.start('Running flow typed')
    exec('flow-typed update', { cwd: root }, error => {
        if (error) {
            spinner.fail(`exec error: flow-ttped ${error}`)
            return
        }
        spinner.succeed('Flow-typed updated')
    })
}

function installFlowBin() {
    spinner.start('Installing Flow Bin')
    exec('npm install --save-dev flow-bin flow-typed', { cwd: root }, error => {
        if (error) {
            spinner.fail(`exec error npm i: ${error}`)
            return
        }
        spinner.succeed('Flow Bin installed')

        flowTypedUpdate()
    })
}

spinner.start('Flow is scaffholding')
fs.writeFile(dstPath, flowConfig, function(error) {
    if (error) {
        spinner.fail(`exec error init: ${error}`)
        return
    }
    spinner.succeed('Scaffholding Done')
    installFlowBin()
})
