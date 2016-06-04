module.exports = {
  method: 'get',
  path: '/public/{param*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
}
