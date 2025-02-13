const express = require('express')
const app = express()

/*app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)*/

app.listen(8080, () => {
    console.log("Servidor en linea")
  })