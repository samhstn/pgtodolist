const Hapi = require('hapi');
const pg = require('pg').native;
const port = process.env.PORT || 4000;
const connectionString = "pg://samhouston: @localhost/postgres";

const server = new Hapi.Server();

server.connection({ port });

server.register([require('inert'), require('vision')], err => {
  if(err) throw err;

  server.views(require('./routes/views.js')(__dirname));

  server.route([
    require('./routes/index.js'),
    require('./routes/params.js'),
    require('./routes/submitNewTodo.js')(pg, connectionString),
    require('./routes/deleteAllTodos.js')(pg, connectionString)
  ]);
});

module.exports = server;
