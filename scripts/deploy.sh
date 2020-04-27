#!/bin/bash

rsync -r --delete-after --quiet -e "ssh -p ${DEPLOY_PORT}" $TRAVIS_BUILD_DIR/public/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/