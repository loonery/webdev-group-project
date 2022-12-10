import people from './users.js'
import * as usersDao from  "./users-dao.js";
import bcrypt from 'bcrypt'

let users = people
const salt = 10;


const UserController = (app) => {
    /*
    app.delete('/api/users/:username', deleteUser);
    app.put('/api/users/:uid', updateUser);
     */

    app.post('/api/users', createUser);
    app.get('/api/users', findUsers)
    app.get('/api/users/:uid', findUserById);

    app.post('/api/users/register', register)
    app.post('/api/users/login', login)
    app.post('/api/users/logout', logout)
}

const register = async (req, res) => {
    const user = req.body;
    let password = await bcrypt.hash(user.password, salt);

    const existingUser = await usersDao.findUserByUsername(user.userName)

    if(existingUser) {
        res.sendStatus(403)
        return
    }
    const currentUser = await usersDao.createUser(user)
    req.session['currentUser'] = currentUser
    res.json(currentUser)
}

const login = async (req, res) => {
    const credentials = req.body
    console.log('Credentials:', credentials)
    const existingUser = await usersDao.findUserByCredentials(
        credentials.userName, credentials.password)
    console.log('Existing User:', existingUser)
    // const existingUser = await usersDao.findUserByUsername(credentials.userName)
    //console.log(existingUser)
    if(existingUser) {
        // access session from here
        req.session['currentUser'] = existingUser
        console.log('users-controller login, session info')
        console.log(req.session)
        res.json(existingUser)
        return
    }
    res.sendStatus(403)
}

const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const password = newUser.password;

    res.json(newUser)
}

const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u.userName === userId.userName);
    res.json(user)
}

const findUsers = async (req, res) => {
    const users = await usersDao.findUsers();
    res.json(users)
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>
        usr._id !== userId);
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((usr) =>
        usr._id === userId ?
            {...usr, ...updates} :
            usr
    );
    res.sendStatus(200);
}


export default UserController;