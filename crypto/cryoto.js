let md5 = require("md5")

exports.hashPassword = function (password) {
    //env + md5(sha1(password))
    return md5(password)
}