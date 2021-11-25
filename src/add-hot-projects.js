const fs = require('fs');
const inquirer = require('inquirer');
const {readHotProjects, $hotProjectsPath} = require('./readFile.js')

const hotProjects = readHotProjects();

const setHotProjec = async() => {
  const { proj } = await inquirer.prompt([
    {
      type: 'input',
      name: 'proj',
      message: 'input project name',
      when: true
    }
  ]);
  if(!hotProjects.includes(proj)){
    fs.writeFileSync($hotProjectsPath,JSON.stringify({"projects":[proj, ...hotProjects]}));
    console.log(`add ${proj} success`);
  }
}

setHotProjec();
