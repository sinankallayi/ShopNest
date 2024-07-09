const jwt = require('jsonwebtoken')
function checkToken(req, res, next, type) {
    //get token from request header
    const authHeader = req.headers["authorization"]
    const token = authHeader?.split(" ")[1]
    //the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
    if (token == null) {
        res.status(400).json({ success: false, message: "Token not present" })
    } else {
        jwt.verify(token, "ACCESS_TOKEN_SECRET", (err, user) => {
            if (err) {
                res.status(403).json({ success: false, message: err.message })
            }
            else {
                if (user.type == type) {
                    // req.email = user.email
                    next() //proceed to the next action in the calling function
                } else {
                    res.status(403).json({ success: false, message: "Token invalid" })
                }
            }
        })
    }
}

function validateToken(req, res, next) {
    checkToken(req, res, next, 'user')
}
function validateAdminToken(req, res, next) {
    checkToken(req, res, next, 'admin')
}

// accessTokens
function generateAccessToken(data) {
    return jwt.sign(data, "ACCESS_TOKEN_SECRET", { expiresIn: "15m" })
}


let refreshTokens = []
function generateRefreshToken(data) {
    const refreshToken =
        jwt.sign(data, "REFRESH_TOKEN_SECRET", { expiresIn: "20m" })
    refreshTokens.push(refreshToken)
    return refreshToken
}

module.exports = {
    checkToken: checkToken,
    validateToken: validateToken,
    validateAdminToken: validateAdminToken,
    generateAccessToken: generateAccessToken,
    generateRefreshToken: generateRefreshToken,
}