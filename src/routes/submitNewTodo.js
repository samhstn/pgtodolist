module.exports = (pg, connectionString) => ({
  method: 'post',
  path: '/submitNewTodo',
  handler: (request, reply) => {
    pg.connect(connectionString, (err, client, done) => {
      if(err) throw err
      client.query("insert into todos values ('title1', 'description1', 10, 'started')", (error, res) => {
        if(error) throw error
        client.query("select * from todos", (error2, res2) => {
          if(error2) throw error2
          const payload = JSON.parse(request.payload)
          reply(payload)
          done()
        })
      }) 
    })
  }
})
