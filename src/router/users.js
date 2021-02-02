
const { Router } = require('express')
const router = Router()
const User = require('../models/userSchema')
const jwt = require("jsonwebtoken")





//create token 

const maxAge = 3 * 24 * 60 * 60;
const createJsonWebToken = (id) => {
    return jwt.sign({ id }, "fast resume secret key", {
        expiresIn: maxAge
    })
}




//create user
router.post('/users', async (req, res) => {

    try {
        const data = new User(req.body)
        const email = User.find(data)
        await data.save()
        const token = createJsonWebToken(data._id)
        console.log(token)
        res.status(201).cookie("jwt", token, {
            maxAge: 60 * 60 * 1000, // 1 hour
            httpOnly: true,
            secure: true,
            sameSite: true,
        })
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/users', async (req, res) => {

    try {

        res.status(201).send("hello");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router