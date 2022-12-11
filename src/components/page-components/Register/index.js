import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerUserThunk} from "../../../services/user-thunks";
import {Link} from "react-router-dom";

const RegisterComponent = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [verifyPassword, setVerifyPassword] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [role, setRole] = useState('');

    let [clicked, setClicked] = useState(false);
    let [message, setMessage] = useState('');

    const currentUser = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const registerClickHandler = () => {
        const newUser = {
            userName: username,
            password: password,
            profilePicture: '',
            firstName: firstName,
            lastName: lastName,
            role: role
        }

        if (firstName === "") {
            setMessage("Please enter a first name.")
            return false
        }
        else if (lastName === "") {
            setMessage("Please enter a last name.")
            return false
        }
        else if (newUser.userName === "") {
            setMessage("Please enter a valid username.")
            return false
        }
        else if (newUser.password === "") {
            setMessage("Please enter a valid password.")
            return false
        }
        else if (newUser.password !== verifyPassword) {
            setMessage("Passwords do not match.")
            return false
        }
        else if (role === "") {
            setMessage("Please select a role.")
            return false
        }
        else {
            dispatch(registerUserThunk(newUser)).then(() => setClicked(true));
        }

    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <form>
                        <h1 className="text-center">Registration Page</h1>
                        <br/>
                        {(!username || !password || !firstName || !lastName || !verifyPassword || (password !== verifyPassword) || !role)
                            && message !== "" && <div className={'alert alert-danger'}>{message}</div>}

                        {currentUser.currentUser !== null && username && password && clicked &&
                            <div className={'alert alert-success'}>Registration Successful. Welcome {currentUser.currentUser.userName}</div>}

                        {currentUser.currentUser === null && username && password && clicked &&
                            <div className={'alert alert-danger'}>
                                This username already exists.
                            </div>}
                        <div className="form-group text-center">
                            <input type="text"
                                   className="form-control"
                                   id="first-name"
                                   value={firstName}
                                   onChange={(event) => {
                                       setMessage("")
                                       setClicked(false)
                                       setFirstName(event.target.value)
                                   }}
                                   placeholder="First name"
                                   name="first-name"/>
                        </div>
                        <div className="form-group text-center mt-4">
                            <input type="text"
                                   className="form-control"
                                   id="last-name"
                                   value={lastName}
                                   onChange={(event) => {
                                       setMessage("")
                                       setClicked(false)
                                       setLastName(event.target.value)
                                   }}
                                   placeholder="Last name"
                                   name="last-name"/>
                        </div>
                        <div className="form-group text-center mt-4">
                            <input type="text"
                                   className="form-control username"
                                   id="username"
                                   value={username}
                                   onChange={(event) => {
                                       setMessage("")
                                       setClicked(false)
                                       setUsername(event.target.value)
                                   }}
                                   placeholder="Username"
                                   name="username"/>
                        </div>
                        <div className="text-center form-group mt-4">
                            <input type="password"
                                   className="form-control password"
                                   id="password"
                                   value={password}
                                   onChange={(event) => {
                                       setMessage("")
                                       setClicked(false)
                                       setPassword(event.target.value)
                                   }}
                                   placeholder="Password"
                                   name="password"/>
                        </div>
                        <div className="text-center form-group mt-4">
                            <input type="password"
                                   className="form-control password"
                                   id="verify-password"
                                   value={verifyPassword}
                                   onChange={(event) => {
                                       setMessage("")
                                       setClicked(false)
                                       setVerifyPassword(event.target.value)
                                   }}
                                   placeholder="Confirm password"
                                   name="verify-password"/>
                        </div>
                        <div className="form-group text-center mt-4">
                            <select className="form-select"
                                    aria-label="Role"
                                    onChange={(event) => {
                                        setMessage("")
                                        setClicked(false)
                                        setRole(event.target.value)}}>
                                <option selected>Role</option>
                                <option value="BASIC">Basic</option>
                                <option value="PREMIUM">Premium</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="button"
                                    className="btn btn-primary mt-4"
                                    onClick={registerClickHandler}>
                                Register
                            </button>
                        </div>
                        <div className={"justify-content-center align-content-center mt-4 text-center"}>
                            Already have an account? Click here to <Link to={'/login'}>login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default RegisterComponent;