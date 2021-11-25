const fs = require('fs');
const inquirer = require('inquirer');
const {readHotProjects, $hotProjectsPath} = require('./readFile.js')

const hotProjects = readHotProjects();
  
const renderCmd = async () => {
  try {
    if(hotProjects.length === 0) {
      throw new Error('no projects ~ please run add-git-commit-hot-project first');
    }
    const { proj } = await inquirer.prompt([
      {
        type: 'list',
        choices: hotProjects,
        name: 'proj',
        message: 'select project',
        when: true
      }
    ]);
    if (hotProjects.includes(proj)) {
      fs.writeFileSync($hotProjectsPath,JSON.stringify({"projects": hotProjects.filter(p => p !== proj)}));
      console.log('remove success ~');
    } else {
      throw new Error('project not in hot-projects');
    }
  } catch (error) {
    console.error(error)
  }
}

renderCmd()



