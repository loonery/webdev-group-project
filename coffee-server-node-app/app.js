import express from 'express';
import session from 'express-session'
import mongoose from "mongoose";
import cors from 'cors';
import UsersController from "./controllers/users/users-controller.js";
import RecipesController from "./controllers/recipes/recipes-controller.js";

mongoose.connect("mongodb://localhost:27017/social-coffee");

const app = express()

app.use(session({
    secret: 'production',
    resave: false,
    saveUninitialized: true,
    cookie: {secure : true}
}))

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

RecipesController(app);
UsersController(app)

app.listen(process.env.PORT || 4000);