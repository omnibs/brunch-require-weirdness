module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  modules:{
    wrapper: false,
    definition: false
  },
  npm: {
    enabled: true,
    whitelist: ["phoenix-socket"],
    globals: {
      socket: 'phoenix-socket'
    }
  }
}
