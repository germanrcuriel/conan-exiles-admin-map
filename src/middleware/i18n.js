const i18n = require('i18n')

module.exports = (app) => {

  i18n.configure({
    locales: [ 'en', 'es' ],
    defaultLocale: 'en',
    extension: '.js',
    register: {},
    directory: `${app.get('rootFolder')}/src/i18n`
  })

  app.use(i18n.init)
  i18n.setLocale('en')
}
