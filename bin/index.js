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
            spinner.fail(`Error: flow-typed ${error}`)
            return
        }
        spinner.succeed('Flow-typed updated')
    })
}

function installFlowBin() {
    spinner.start('Installing Dependencies')
    exec(
        'npm install --save-dev flow-bin flow-typed css-module-flow',
        { cwd: root },
        error => {
            if (error) {
                spinner.fail(`Error npm i: ${error}`)
                return
            }
            spinner.succeed('Dependencies installed')

            flowTypedUpdate()
        }
    )
}

spinner.start('Flow is scaffholding')
fs.writeFile(dstPath, flowConfig, function(error) {
    if (error) {
        spinner.fail(`Error init: ${error}`)
        return
    }
    spinner.succeed('Scaffholding Done')
    installFlowBin()
})
