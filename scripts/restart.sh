#!/bin/bash
nvm install v18.18.2
node --version
npm install -g pm2
pm2 start server.js