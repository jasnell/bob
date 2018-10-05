'use strict'

// node --expose-internals file-to-console-test.js ./fixtures/test

const FileSource = require('fs-source')
const StdoutSink = require('../helpers/stdout-sink')

const fileSource = new FileSource(process.argv[2])
const stdoutSink = new StdoutSink()

stdoutSink.bindSource(fileSource, error => {
  if (error)
    console.error('ERROR!', error)
  else {
    console.log('done')
  }
})
