#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交源项目代码到gitbub
git add -A
git commit -m "更新文档"
git push -u origin master
