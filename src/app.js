const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
require('./database/mongoose')
let cors = require('cors')
app.use(cors())
const userRouter = require('./router/users')
const cookieParser = require('cookie-parser')

app.use(cookieParser())




app.use(userRouter)

app.listen(port, () => {
    console.log(`connection is  extablished`)
});

