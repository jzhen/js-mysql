const config = {
  port: process.env.PORT || 8080,
  allowCrossDomain: false,
  https: false,
  mysql_host: process.env.mysql_host,
  mysql_user: process.env.mysql_user,
  mysql_password: process.env.mysql_password,
  mysql_database: process.env.mysql_database,
  mysql_soft_delete: false,
  mysql_soft_delete_field: 'deleted',
  mysql_query_debug: false,
  mysql_port: 3306,
  charset: 'utf8'
}

/**
 * Set the current environment or default to 'development'
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
config.env = process.env.NODE_ENV

export default config
