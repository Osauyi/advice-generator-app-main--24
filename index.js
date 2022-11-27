const express = require("express")
const request = require("request")
const https = require("https");
const { options } = require("request");
const { response } = require("express");
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})


const url = "https://api.adviceslip.com/advice";

app.post("/", function(req, res) {

  let lucy = req.body.game
  request(url, function(error, response, body){
    var data = JSON.parse(body)
    id = data.slip.id
    lucy = id
    console.log(lucy)
  })

res.sendFile(__dirname + "/index.html")
})

  

app.listen(3000, function() {
  console.log("Server running........(yeah RiGhT)")
})   