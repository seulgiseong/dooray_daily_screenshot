#!/bin/sh

webdriver-manager start

sleep(10)
protractor protractor.conf.js
