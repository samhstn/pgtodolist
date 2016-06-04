module.exports = (dirname) => ({
  engines: {
    html: require('handlebars')
  },
  relativeTo: dirname,
  path: '../views'
})
