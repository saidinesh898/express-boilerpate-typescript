#! /usr/bin/env node
const {execSync} = require('child_process')
const runCommand = command => {
try{
    execSync(`${command}`, {stdio:'inherit'})
}
catch(e){
    console.log(e)
    return false
}
return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/saidinesh898/express-boilerpate-typescript ${repoName}`
const installDepCommand = `cd ${repoName} && npm install`

console.log(`Cloning Repo`)

const checkedOut = runCommand(gitCheckoutCommand)
if(!checkedOut) process.exit(-1)

console.log("Installing Dependencies")

const installDep = runCommand(installDepCommand)
if(!installDep) process.exit(-1)

console.log("Successfully Installed")