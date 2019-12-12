# react-compare-app-e2e

steps taken for setup
mkdir react-compare-app-e2e && cd react-compare-app-e2e
npm init -y
npm i --save-dev @wdio/cli
./node_modules/.bin/wdio config -y
mkdir -p ./test/specs
touch ./test/specs/basic.js
./node_modules/.bin/wdio wdio.conf.js

to run

git clone https://github.com/tjl352/react-compare-app-e2e.git

npm install

./node_modules/.bin/wdio wdio.conf.js
