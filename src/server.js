const Hapi = require('hapi');

const server = new Hapi.Server();
const port = 4000;

server.connection({ port })

server.register([require('inert'), require('vision')], err => {
  if(err) throw err;

  server.views(require('./routes/views.js')(__dirname));

  server.route([
    {
      method: 'get',
      path: '/',
      handler: (request, reply) => {
        reply.view('index')
      }
    },
    {
      method: 'get',
      path: '/public/{param*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    }
  ])
})

module.exports = server
