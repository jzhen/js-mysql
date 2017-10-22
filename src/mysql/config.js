const merge = require('lodash/merge')

/**
 * Load .env settings into process.env
 * Will fail silently if no .env file present
 */
require('dotenv').config()

/**
 * Get default configs
 */
const config = require('./env/default')

/**
 * Get local configs
 */
let localConfig
try {
  // Local configs may not exist
  localConfig = require(`./env/${config.env}`)
  localConfig = localConfig || {}
} catch (err) {
  localConfig = {}
}

/**
 * Merge the config files
 * localConfig will override defaults
 */
merge({}, config, localConfig)

export default config
