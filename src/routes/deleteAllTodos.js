module.exports = (pg, connectionString) => ({
  method: 'get',
  path: '/deleteAllTodos',
  handler: (request, reply) => {
    pg.connect(connectionString, (err, client, done) => {
      if(err) throw err
      client.query("delete from todos", (error) => {
        if(error) throw error
        reply('deleted all records')
        done()
      })
    })
  }
})
