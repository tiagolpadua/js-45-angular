#!/bin/sh -x

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
fi

git add .
git commit -m "$1"
git tag $1
