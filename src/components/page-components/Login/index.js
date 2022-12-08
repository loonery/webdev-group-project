import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const LoginComponent = () => {
    let [login, setLogin] = useState('');
    const dispatch = useDispatch();
    const loginClickHandler = () => {}

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
                                   placeholder="Username"
                                   name="username"/>
                        </div>
                        <div className="text-center form-group mt-4">
                            <input type="password"
                                   className="form-control password"
                                   id="password"
                                   placeholder="Password"
                                   name="password"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-4">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginComponent;