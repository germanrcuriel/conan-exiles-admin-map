import Polyglot from 'node-polyglot'

import config from '../config'
import languages from '../languages'

const languageMiddleware = (app) => {

  let language = config.SETTINGS.language

  if (!languages[language]) {
    language = 'en'
  }

  const polyglot = new Polyglot({
    locale: language,
    phrases: languages[language]
  })

  app.use((req, res, next) => {
    res.language = {
      locale: language,
      phrases: polyglot.phrases
    }
    return next()
  })

}

export default languageMiddleware
