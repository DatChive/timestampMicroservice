'use strict'
const express = require('express')
const http = require('http')
const app = express()

app.use((err, req, res, next) => {
	console.log(err.stack.red)
	res.status(err.status || 500)
	res.send({ message: err.message })
})

// 
app.get('/:date', function (req, res) {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  var date = req.params.date
  const natural = new Date(date) > 0
  const unix = new Date(date * 1000) > 0
  var result = {
    unix: null,
    natural: null
  }
  if(natural){
    console.log('natural')
    result.unix = Date.parse(date) / 1000
    result.natural = date
  } else if (unix) {
    console.log('unix')
    let tempNatural = new Date(date * 1000)
    result.unix = date
    result.natural = months[tempNatural.getMonth()] + ' ' + tempNatural.getDate() + ', ' + tempNatural.getFullYear()
  }
  res.send(result)
})

const server = require('http').createServer(app)

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address()
  console.log("server listening at", addr.address + ":" + addr.port)
})