const path = require("path")
require("dotenv").config(
    {
        path: path.resolve(process.cwd())
    }
)

process.env.PORT = process.env.PORT || 3000

