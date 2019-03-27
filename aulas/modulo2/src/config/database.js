module.exports = {
  development: {
    dialect: 'postgres',
    host: '127.0.0.1',
    username: 'docker',
    password: 'docker',
    database: 'gonodemodulo2',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}
