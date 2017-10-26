import config from './config'

const mysql = require('mysql2/promise')

const makeConfig = (globalConfig = {}) => ({
  host: globalConfig.mysql_host || 'localhost',
  user: globalConfig.mysql_user || 'root',
  password: globalConfig.mysql_password || '',
  database: globalConfig.mysql_database || '',
  port: globalConfig.mysql_port ? globalConfig.mysql_port : 3306
})

const dbConfig = makeConfig(config)

if (config.mac) {
  dbConfig.socketPath = '/tmp/mysql.sock'
}

const pool = mysql.createPool(dbConfig)
export default pool
