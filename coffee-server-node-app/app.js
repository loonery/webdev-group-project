import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controller.js";

const app = express()
/*
const session = require('express-session')
app.set('trust proxy', 1);
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure : true}
}))

let sess = {
    secret: SECRET,
    cookie: { secure: false }
};

if (process.env.ENV === 'production') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true;
}
*/

app.use(express.json())
app.use(cors())
UserController(app)
app.listen(4000);