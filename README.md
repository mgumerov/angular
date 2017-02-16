Can use node.js http-server for serving this; or nginx, etc

npm install
- to install dependencies listed in package.json

npm install typescript
- could include that in devdependencies but usually it's already installed :)

-- node node_modules/typescript/bin/tsc
- to build it

npm install awesome-typescript-loader --save

node_modules\.bin\webpack main.ts bundle.js
- to build it
