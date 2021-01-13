const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const User = require('./models/userSchema')
app.use(express.json())
require('./database/mongoose')
let cors = require('cors')
app.use(cors())


app.post('/users', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`connection is  extablished`)
});

// const userRouter = require('./router/users');
// app.use(userRouter);

// module.exports =App;