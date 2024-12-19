const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

connection
  .authenticate()
  .then(() => {
    console.log('Database connected')
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error)
  })

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})