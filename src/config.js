import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import ini from 'ini'

const configFile = join(process.cwd(), 'conan-exiles-admin-map.ini')

let config = {
  SETTINGS: {
    language: 'es',
    port: 3001
  },
  CONAN_EXILES: {
    database: join(process.cwd(), 'game.db')
  },
  USERS: {}
}

if (existsSync(configFile)) {
  const contents = ini.parse(readFileSync(configFile, 'UTF8'))
  config = Object.assign({}, config, contents)
}

export default config
