#!/bin/bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
nvm install v18.18.2
node --version
npm install -g pm2
pm2 start server.js