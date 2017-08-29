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
const yarn = path.join(root, 'yarn.lock')
const flowConfig = fs.readFileSync(srcPath)
let installer = 'npm install'

if (fs.existsSync(yarn)) {
    installer = 'yarn add'
}

function installFlowBin() {
    spinner.start('Installing Dependencies')
    exec(`${installer} flow-bin --save-dev`, { cwd: root }, error => {
        if (error) {
            spinner.fail(`Install Error: ${error}`)
            return
        }
        spinner.succeed('Dependencies installed')
    })
}

spinner.start('Flow is scaffolding')
fs.writeFile(dstPath, flowConfig, function(error) {
    if (error) {
        spinner.fail(`Error init: ${error}`)
        return
    }
    spinner.succeed('Scaffolding Done')
    installFlowBin()
})
