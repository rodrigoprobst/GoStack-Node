const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()

nunjucks.configure(path.resolve(__dirname, 'src', 'views'), {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const checkMiddleware = (req, res, next) => {
  const { age } = req.query
  if (!age) {
    return res.redirect('/')
  } else {
    return next()
  }
}

app.get('/', (req, res) => {
  return res.render('home')
})

app.post('/check', (req, res) => {
  const { age } = req.body
  if (age < 18) {
    return res.redirect(`/minor?age=${age}`)
  } else if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  }
})

app.use(checkMiddleware)

app.get('/major', (req, res) => {
  return res.render('afterCheck', { maiormenor: 'maior', age: req.query.age })
})

app.get('/minor', (req, res) => {
  return res.render('afterCheck', { maiormenor: 'menor', age: req.query.age })
})

app.listen(3000)
