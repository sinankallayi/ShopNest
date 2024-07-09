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
                res.status(403).json({ success: false, message: "Token invalid" })
            }
            else {
                if (user.type == type) {
                    req.user = user
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
function generateAccessToken(user, type) {
    return jwt.sign({ ...user, type: type }, "ACCESS_TOKEN_SECRET", { expiresIn: "15m" })
}


let refreshTokens = []
function generateRefreshToken(user, type) {
    const refreshToken =
        jwt.sign({ ...user, type: type }, "REFRESH_TOKEN_SECRET", { expiresIn: "20m" })
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