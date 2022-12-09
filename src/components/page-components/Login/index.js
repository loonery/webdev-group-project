import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {findUserThunk} from "../../../services/user-thunks";

const LoginComponent = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const loginClickHandler = () => {
        const user = {
            username: username,
            password: password
        }
        dispatch(findUserThunk(user));
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <form>
                        <h1 className="text-center">Login Page</h1>
                        <br/>
                        <div className="form-group text-center">
                            <input type="text"
                                   className="form-control username"
                                   id="username"
                                   value={username}
                                   onChange={(event) => setUsername(event.target.value)}
                                   placeholder="Username"
                                   name="username"/>
                        </div>
                        <div className="text-center form-group mt-4">
                            <input type="password"
                                   className="form-control password"
                                   id="password"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}
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
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginComponent;