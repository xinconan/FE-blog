#!/usr/bin/env sh

set -e
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'
# one commit
git push -f git@github.com:xinconan/FE-blog.git master:gh-pages

cd -