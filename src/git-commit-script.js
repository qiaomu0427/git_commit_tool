const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const childProcess = require('child_process');
const {readHotProjects, readRushJson, $hotProjectsPath} = require('./readFile.js')

const hotProjects = readHotProjects() ?? [];

const rushProjects = readRushJson() ?? [];
  
const renderCmd = async () => {
  try {
    if(hotProjects.length === 0 && rushProjects.length === 0) {
      throw new Error('no projects ~ please run "add-git-commit-hot-project" first');
    }
    const { action, proj, message } = await inquirer.prompt([
      {
        type: 'list',
        choices:['feat', 'fix', 'style', 'chore', 'build', 'ci', 'docs', 'improvement', 'perf', 'refactor', 'revert', 'test'],
        name: 'action',
        message: 'select action',
        default: 'feat',
        when: true
      },
      {
        type: 'list',
        choices: [...hotProjects, ...rushProjects],
        name: 'proj',
        message: 'select project',
        when: true
      },
      {
        type: 'input',
        name: 'message',
        message: 'commit message',
        when: true
      }
    ]);
    fs.writeFileSync($hotProjectsPath,JSON.stringify({"projects": [proj, ...hotProjects.filter(p => p !== proj)]}));
    const exec = util.promisify(childProcess.exec);
    await exec(`git commit -m '${action}(${proj}): ${message}'`)
  } catch (error) {
    console.error(error.message);
  }
}

renderCmd()



