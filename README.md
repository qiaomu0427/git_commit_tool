
# Git-commit-tool 使用手册
> 背景：
> 平时写 commit message 纯手写，很麻烦，所以想偷个懒~~ 这是一个 git commit message 小工具，可以设置常用项目，选择 commit action，然后执行提交动作 

## Get start
### Step 1:  clone plugin 代码

``` shell 
git clone git@github.com:qiaomu0427/git_commit_tool.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/git_commit_tool
```

### Step 2: 修改 .zshrc 的代码
`.zshrc` 文件在用户目录下，如果没有特地设置过的话，一般在 `/Users/admin` 目录下，在 `plugins` 中添加插件名 `git_commit_tool`

## 使用：
### - add-git-commit-hot-project 添加常用的项目
输入常用项目名，会被记录下来，在提交时作为项目的选项

### - remove-git-commit-hot-project 删除常用项目
会自动列出已经设置的常用项目，按上下键选择，回车确定

### - git-commit 提交小工具
1. 选择 action
2. 选择项目，项目有两种，一种是写在 rush.json 中的，一种是自己设置的 hot project。每一次的选择都会在下一次被置顶。（所以第一次找 rush 中的项目可能会花一写时间，下一次在使用的时候就可以很快找到了）
3. 输入 message
