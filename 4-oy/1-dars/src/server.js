const PORT = process.env.PORT ?? 3000
const express = require("express")
const ejs = require("ejs")
const app = express()
const path = require("path")

app.engine("ejs", ejs.renderFile)
app.set("view engine", "ejs")


//Default path in root directory

//set custom path to views
app.set("views", path.resolve(__dirname, "views"))




app.get("/", (req, res) => {
    res.render("index", {users: ["Diyorbek", "Abduhalil", "Abdulhodiy"]})
})




try{
    app.listen(PORT, () => console.log("Server is running on https://localhost:" + PORT))
}catch(error){
    console.log(error)
}