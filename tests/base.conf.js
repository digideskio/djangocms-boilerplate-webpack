/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/divio/djangocms-boilerplate-webpack
 */

// #############################################################################
// CONFIGURATION
var b2s = require('browserslist-saucelabs');

module.exports = {
    formatTaskName: function formatTaskName (browserName) {
        return [
            'Test', browserName, 'for',
            process.env.TRAVIS_REPO_SLUG,
            process.env.TRAVIS_PULL_REQUEST === 'true' ? 'pull request #' + process.env.TRAVIS_PULL_REQUEST : '',
            'build #' + process.env.TRAVIS_JOB_NUMBER
        ].join(' ');
    },

    sauceLabsBrowsers: b2s()
};
