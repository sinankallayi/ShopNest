const userModel = require("../model/user")

const signup = async (req, res) => {
    const existing = await userModel.findOne({ username: req.body.username, email: req.body.email })
    if (existing) {
        res.send({ success: false, message: "User already Registered" })
    } else {
        var result = await new userModel(req.body)
        if (result.save()) {
            res.send({ success: true, message: "Registration success", data: result})
        } else {
            res.send({ success: false, message: "Failed to save" })
        }
    }
}

const login = async (req, res) => {
    console.log("login", req.body)
    var result = await userModel.findOne(req.body)
    if (result) {
        res.send({ success: true, message: "success" })
    } else {
        res.send({ success: false, message: "Invalid Credentials" })
    }
}

const userController = {
    signup : signup,
    login: login
}

module.exports = userController