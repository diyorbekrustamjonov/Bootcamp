const PORT = process.env.PORT ?? 3000
const express = require("express")
const path = require("path")
const ejs = require("ejs")
const app = express()
const fs = require("fs")


app.engine("ejs", ejs.renderFile)
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(express.json())

const messages = JSON.parse(fs.readFileSync(path.join(__dirname, "database", "news.json"))) || []

app.get("/admin", (req, res) => {
    res.render("admin")
})


app.get("/", (req, res) => {
    res.render("index", {messages} )
})

app.post("/data", (req, res) => {
    const {message} = req.body
    const newsId = messages.length ? messages[messages.length - 1].newsId + 1 : 1
    messages.push({newsId, message})
    fs.writeFileSync(path.join(__dirname, "database", "news.json"), JSON.stringify(messages))
    res.redirect("/")
})



try{
    app.listen(PORT, () => console.log("Server is running on https://localhost:" + PORT))
}catch(error){
    console.log(error)
}