'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jb-docker:dockerfile', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/dockerfile'))
      .withOptions({ sourceImage: 'ubuntu' });
  });

  it('creates files', () => {
    assert.file(['Dockerfile']);
  });
});
