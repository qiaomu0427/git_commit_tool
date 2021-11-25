const path = require('path');

module.exports = {
  entry: {
    "add-hot-projects": './src/add-hot-projects.js',
    "git-commit-script": './src/git-commit-script.js',
    "remove-hot-project": './src/remove-hot-project.js',
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
  },
  target: "node",
  resolve: {
    fallback: {
      path: false,
      fs: false,
    }
  },
  node: {
      __filename: false,
      __dirname: false
  },
  resolve: {
      extensions: ['.js', '.json']
  },
  module: {},  
}
