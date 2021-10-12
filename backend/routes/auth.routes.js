require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
var User = require("../models/index").User
var Session = require("../models/index").Session

const salt = bcrypt.genSaltSync(15)
module.exports = (app) => {
    app.post('/login', (req, res) => {
        const username = req.query.username;
        const password = req.query.password;
        login(username, password).then((user) => {
            if(user !== null && bcrypt.compareSync(password, user.dataValues.password)){
                const payload = {check: true}
                const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: 1440})
                Session.create({
                    userId: user.dataValues.id,
                    token: token,
                    active: true
                })
                res.json({
                    status: 200,
                    data: {
                        username: user.dataValues.username,
                        email: user.dataValues.email,
                        profileImage: user.dataValues.profileImage || null,
                        token: token
                    }
                })
            }else{
                res.json({
                    status: 403,
                    message: "Username and/or password incorrect"
                })
            }
        })
    })

    app.post('/register', (req, res) => {
        const username = req.query.username;
        const password = bcrypt.hashSync(req.query.password, salt);
        const email = req.query.email;
        register(username, password, email, null)
        res.end()
    })
}

const register = async (username, password, email, profileImage) => {
    const user = await User.create({
        username: username,
        password: password, 
        email: email
    })
}

const login = async (username, password) => {
    return await User.findOne({
        where: {
            username: username,
        }
    })
    
}