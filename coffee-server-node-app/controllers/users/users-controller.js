import people from './users.js'
let users = people

const UserController = (app) => {
    /*
    app.delete('/api/users/:username', deleteUser);
    app.put('/api/users/:uid', updateUser);
     */

    app.post('/api/users', createUser);
    app.get('/api/users', findUsers)
    app.get('/api/users/:username', findUserById);
}

const createUser = (req, res) => {
    const newUser = req.body;
    let check = ""
    check = users.find(u => u.username === newUser.username)

    if (check === undefined) {
        users.push(newUser);
        res.json(newUser);
    }
}

const findUserById = (req, res) => {
    const userId = req.params;
    const user = users.find(u => u.username === userId.username);
    res.json(user);
}

const findUsers = (req, res) => {
    const type = req.query.type
    if(type) {
        const usersOfType = users
            .filter(u => u.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)
}

/*
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
 */

export default UserController