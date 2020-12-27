const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const TheNumber = require("./models/the-number");
const socket = require("./socket");
const numberRoute = require("./routes/the-number");
const cors = require("cors");

const uri = "mongodb://localhost:27017/RealTimeData"

const app = express();
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use(numberRoute);


mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(result => {
    const server = app.listen(5000);
    console.log("App listening on 5000");
    const io = socket.init(server);
    io.on('connection', socket => {
        console.log("Client Connected");
    });
}).catch(err => console.log(err));



