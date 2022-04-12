const express = require("express")
const ejs = require("ejs")
const PORT = process.env.PORT
const app = express()

// Middlewares
app.use(express.json())

// Routes




try{
    app.listen(PORT, () => console.log("Server is running on https://localhost:" + PORT))
}catch(error){
    console.log(error)
}