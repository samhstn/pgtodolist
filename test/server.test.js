const tape = require('tape');

const server = require('../src/server.js');

tape('tests if the server replies with the index file', t => {
  const options = {
    method: 'get',
    url: '/'
  }
  server.inject(options, res => {
    t.equal(res.statusCode, 200, '/ request responds with 200 status code')
    t.end()
  })
})

tape('tests if the /{params} endpoint correctly serves the js and css files', t => {
  const options1 = {
    method: 'get',
    url: '/public/script.js'
  }
  const options2 = {
    method: 'get',
    url: '/public/style.css'
  }
  server.inject(options1, res => {
    t.equal(res.statusCode, 200, '/public/script.js responds with 200 status code')
    t.ok(res.payload.indexOf('finding the script file') > -1, 'finds the script file')
    server.inject(options2, res => {
      t.equal(res.statusCode, 200, '/public/style.css responds with 200 status code')
      t.ok(res.payload.indexOf('body') > -1, 'finds the css file')
      t.end()
    })
  })
})

tape('tests if recieve reply of deleted all records', t => {
  const options = {
    method: 'get',
    url: '/deleteAllTodos'
  }
  server.inject(options, res => {
    t.equal(res.payload, 'deleted all records', 'deletes all records')
    t.end()
  })
})
