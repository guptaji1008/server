const dotenv = require("dotenv")
const express = require('express')
const cookieParser = require('cookie-parser')
dotenv.config({path: "./config.env"})
const cors = require('cors')
require("./db/conn")
const Lastbooking = require("./models/movieSchema")
const port = 8080
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.get("/api/booking", async (req, res) => {
    try {

        const result = await Lastbooking.find().sort({_id: -1}).limit(1)
        res.status(200).send(result)

    }catch(err) {

        res.status(400).send(err)

    }
})

app.post("/api/booking", async (req, res) => {
    try {

        const {A1, A2, A3, A4, D1, D2, movieName, timing} = req.body
        const lastBook = new Lastbooking({A1, A2, A3, A4, D1, D2, movieName, timing})
        await lastBook.save()
        res.status(201).send("Saved successfully")

    }catch (err) {
        res.status(401).send(err)
    }
})

app.listen(port, () => {
    console.log(`Connected to port no. ${port}`)
})