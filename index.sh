#!/bin/bash

rm -rf ./github-page
mkdir ./github-page
npm run build
cp -a ./build/. ./github-page