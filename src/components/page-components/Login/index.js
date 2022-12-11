import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk, loginUserThunk} from "../../../services/user-thunks";
import {Link} from "react-router-dom";


const LoginComponent = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [clicked, setClicked] = useState(false);
    let [message, setMessage] = useState('');

    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const loginClickHandler = () => {
        const user = {
            userName: username,
            password: password
        }

        // const userInfo = dispatch(findUserThunk(user)).arg
        dispatch(loginUserThunk(user));
        if (user.userName === "") {
            setMessage("Please enter a valid name.")
            return false
        }
        else if(user.password === "") {
            setMessage("Please enter a valid password.")
            return false
        }
        else {
            try {
                dispatch(loginUserThunk(user)).then(() => setClicked(true));
            }
            catch (e) {

            }
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <form>
                        <h1 className="text-center">Login Page</h1>
                        {(!username || !password) && message !== "" && <div className={'alert alert-danger'}>{message}</div>}

                        {currentUser !== null && username && password &&
                            <div className={'alert alert-success'}>Success</div>}

                        {currentUser === null && username && password && clicked &&
                            <div className={'alert alert-danger'}>
                                Your username/password is incorrect. Please try again.
                            </div>}
                        <br/>
                        <div className="form-group text-center">
                            <input type="text"
                                   className="form-control username"
                                   id="username"
                                   value={username}
                                   onChange={(event) => {
                                       setMessage("")
                                       setClicked(false)
                                       setUsername(event.target.value)}}
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
                                       setPassword(event.target.value)}}
                                   placeholder="Password"
                                   name="password"/>
                        </div>
                        <div className="text-center">
                            <button type="button"
                                    className="btn btn-primary mt-4"
                                    onClick={loginClickHandler}>
                                Login
                            </button>
                        </div>
                        <div className={"justify-content-center align-content-center mt-4 text-center"}>
                            Need an account? Click here to <Link to={'/register'}>register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginComponent;