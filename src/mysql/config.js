const env = require('dotenv')

const templatePath =
`${__dirname}/../template-files/.env_template`

const getTemplateConfig = () =>
  env.config({ path: templatePath }).parsed

const getConfig = () =>
  env.config().parsed

const backupConfig = {
  port: 8080,
  allowCrossDomain: false,
  https: false,
  mysql_host: 'localhost',
  mysql_user: 'root',
  mysql_password: '',
  mysql_database: '',
  mysql_soft_delete: false,
  mysql_soft_delete_field: 'deleted',
  mysql_query_debug: false,
  mysql_port: 3306
}

const config = getConfig() || getTemplateConfig() || backupConfig

export default config
