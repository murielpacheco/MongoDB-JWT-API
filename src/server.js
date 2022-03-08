const dotenv = require("dotenv").config()
const express = require("express")

const connectToDatabase = require("./database")

connectToDatabase()

const app = express()

app.use(express.json());

app.listen(3333, () => console.log("Server is running at 3333"));