const server = require('./server')

server.listen(process.env.SERVER_PORT || 3000)
