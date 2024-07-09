const userModel = require("../model/user")
const bcrypt = require("bcrypt")
const { generateRefreshToken, generateAccessToken } = require("../utils/auth")

const signup = async (req, res) => {
    const user = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    var result = await new userModel({ ...user, password: hashedPassword })
    if (result.save()) {
        res.status(201).json({ success: true, message: "Registration success" })
    } else {
        res.json({ success: false, message: "Failed to save" })
    }
}


const login = async (req, res) => {
    var user = await userModel.findOne({ email: req.body.email })
    if (user == null) res.status(400).json({ success: false, message: "Invalid username or password" })
    else {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const data = { user: user.email, username: user.username, type: "user" }
            const accessToken = generateAccessToken(data)
            const refreshToken = generateRefreshToken(data)
            res.json({ accessToken: accessToken, refreshToken: refreshToken })
        }
        else {
            res.status(400).json({ success: false, message: "Invalid username or password" })
        }
    }
}

const userController = {
    signup: signup,
    login: login
}

module.exports = userController