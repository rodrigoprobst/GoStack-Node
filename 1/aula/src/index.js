const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const users = ['Rodrigo Becker Probst', 'Joice Ramos', 'Cleber do Amoedo']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

/*
const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  )

  req.name = 'GoNode'

  return next()
}

app.use(logMiddleware)

// return res.end;
// return res.send;
// return res.json;
app.get('/', (req, res) => {
  return res.send(`Bem Vindo ao ${req.name}, ${req.query.name}`)
})

app.get('/nome/:name', (req, res) => {
  return res.send(`Bem Vindo ${req.params.name}`)
})

app.get('/name/:name', (req, res) => {
  return res.json({
    massage: `Bem Vindo ${req.params.name}`
  })
})
*/

app.listen(3000)
