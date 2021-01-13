const mongoose = require("mongoose");
let url = process.env.DATABASE_URL || "mongodb://localhost:27017/fast-resume";
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful')
}).catch((e) => {
    console.log(`connection unsuccessful ${e}`)
})