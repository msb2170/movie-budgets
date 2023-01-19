const { response } = require('express')
const express = require('express')
const axios = require('axios')
require("dotenv").config({path: "./.env"})

const app = express()

const PORT = process.env.PORT || 5000

const apikey = process.env.apikey

app.get('/', (req, res) => {
    res.send(axios.get(`http://www.omdbapi.com/?${apikey}&t=Babe`).then((response) => response.json()).then((data) => console.log(data)))
})

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
    
})