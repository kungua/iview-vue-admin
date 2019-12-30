#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
echo Building. this may take a minute...
npm run build

# cd 到构建输出的目录下
cd dist

# 这两行是用来适配 history 模式的
# https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
#cp index.html 404.html
#find . -name ".DS_Store" -delete

# 部署到自定义域域名
# echo 'www.example.com' > CNAME
echo Deploying..
git init
git config user.name 'kungua'
git config user.emial 'maguahongkun@outlook.com'
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/kungua/iview-vue-admin.git master:gh-pages

cd -
