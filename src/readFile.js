const fs = require('fs');
// FIXME: json5 这个库有 bug，打包后的结构会变化成 {defualt: {parse: function..., stringfy: function}}
// issue：https://github.com/json5/json5/issues/240
const JSON5 = require('json5').default;

const USER_HOME = process.env.HOME || process.env.USERPROFILE;

const $hotProjectsPath = `${USER_HOME}/.oh-my-zsh/custom/plugins/git_commit_tool/hot-projects.json`;

const $rushJsonPath = `${process.cwd()}/rush.json`;

const readFile = (filePath, dataFormatter) => {
  if(fs.existsSync(filePath)){
    try {
      const data = fs.readFileSync(filePath);
      return dataFormatter(JSON5.parse(data))
    } catch (error) {
      console.log(error);
      console.error(`parse ${filePath} error`);
    }
  }
}

const readHotProjects = () => {
  return readFile($hotProjectsPath,(data)=> data.projects)
}

const readRushJson = () => {
  return readFile($rushJsonPath,(data)=> data.projects.map(p => p.packageName))
}

module.exports={
  USER_HOME,
  $hotProjectsPath,
  $rushJsonPath,
  readHotProjects,
  readRushJson,
}
