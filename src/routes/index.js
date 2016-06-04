module.exports = {
  method: 'get',
  path: '/',
  handler: (request, reply) => {
    reply.view('index')
  }
}
