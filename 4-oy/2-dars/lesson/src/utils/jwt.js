const jwt = require("jsonwebtoken")

module.exports = {
    sign: function (payload){
        return jwt.sign(payload, se)
    }
}