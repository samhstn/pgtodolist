module.exports = {
  method: 'post',
  path: '/submitNewTodo',
  handler: (request, reply) => {
    const payload = JSON.parse(request.payload)
    reply(payload)
  }
}
