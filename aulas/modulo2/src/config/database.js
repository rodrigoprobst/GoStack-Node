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
  production: {
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
  }
}
