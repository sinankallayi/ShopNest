const userModel = require("../model/user")
const bcrypt = require("bcrypt")
const { generateRefreshToken } = require("../utils/auth")

const signup = async (req, res) => {
    const user = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    var result = await new userModel({ ...user, password: hashedPassword })
    if (result.save()) {
        res.send({ success: true, message: "Registration success", data: result })
    } else {
        res.send({ success: false, message: "Failed to save" })
    }
}


const login = async (req, res) => {
    var user = await userModel.findOne({ email: req.body.email })
    if (user == null) res.status(404).send("User does not exist!")
    if (await bcrypt.compare(req.body.password, user.password)) {
        const data = { user: user.email, username: user.username }
        const accessToken = generateAccessToken(data, 'user')
        const refreshToken = generateRefreshToken(data, 'user')
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
    }
    else {
        res.status(401).send("Password Incorrect!")
    }
    if (user) {
        res.send({ success: true, message: "success" })
    } else {
        res.send({ success: false, message: "Invalid Credentials" })
    }
}

const userController = {
    signup: signup,
    login: login
}

module.exports = userController