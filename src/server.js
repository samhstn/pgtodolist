const Hapi = require('hapi');

const server = new Hapi.Server();
const port = process.env.PORT || 4000;

server.connection({ port });

server.register([require('inert'), require('vision')], err => {
  if(err) throw err;

  server.views(require('./routes/views.js')(__dirname));

  server.route([
    require('./routes/index.js'),
    require('./routes/params.js'),
    require('./routes/submitNewTodo.js')
  ]);
});

module.exports = server;
