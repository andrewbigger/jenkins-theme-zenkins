#!/usr/bin/env bash

set -e
grunt

cd plugin
mvn clean package
