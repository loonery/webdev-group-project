import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentUserThunk} from "../../../services/user-thunks";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.users);

    console.log(profile)

    const [firstName, setFirstName] = useState(profile.currentUser.firstName);
    const [lastName, setLastName] = useState(profile.currentUser.lastName);
    const [username, setUsername] = useState(profile.currentUser.userName);
    const [role, setRole] = useState(profile.currentUser.role);

    const dispatch = useDispatch();

    const saveProfileHandler = () => {
        let info = {
            _id: profile.currentUser._id,
            firstName: firstName,
            lastName: lastName,
            profilePicture: "",
            userName: username,
            role: role
        }
        console.log("Edit-profile.js")
        console.log(info._id)
        dispatch(updateCurrentUserThunk(info));
    }

    const firstNameChangeHandler = (event) => {
        const doValue = event.target.value;
        setFirstName(doValue);
    }
    const lastNameChangeHandler = (event) => {
        const doValue = event.target.value;
        setLastName(doValue);
    }
    const usernameChangeHandler = (event) => {
        const doValue = event.target.value;
        setUsername(doValue);
    }
    const roleChangeHandler = (event) => {
        const doValue = event.target.value;
        setRole(doValue);
    }

    return (
        <>

            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <form>
                            <h1 className={"text-center"}>Edit Profile</h1>
                            <div className="form-group text-center">
                                <input type="text"
                                       className="form-control"
                                       id="first-name"
                                       defaultValue={profile.currentUser.firstName}
                                       onChange={firstNameChangeHandler}
                                       placeholder="First name"
                                       name="first-name"/>
                            </div>
                            <div className="form-group text-center mt-4">
                                <input type="text"
                                       className="form-control"
                                       id="last-name"
                                       defaultValue={profile.currentUser.lastName}
                                       onChange={lastNameChangeHandler}
                                       placeholder="Last name"
                                       name="last-name"/>
                            </div>
                            <div className="form-group text-center mt-4">
                                <input type="text"
                                       className="form-control username"
                                       id="username"
                                       defaultValue={profile.currentUser.userName}
                                       onChange={usernameChangeHandler}
                                       placeholder="Username"
                                       name="username"/>
                            </div>
                            <div className="form-group text-center mt-4">
                                <select className="form-select"
                                        aria-label="Role"
                                        defaultValue={profile.currentUser.role}
                                        onChange={roleChangeHandler}>
                                    <option value="BASIC">Basic</option>
                                    <option value="PREMIUM">Premium</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                            <div className={"text-center p-4"}>
                                <Link to={"/profile"}>
                                    <button type={"button"}
                                            className={"btn btn-success me-4 mb-4"}
                                            onClick={saveProfileHandler}>
                                        Save
                                    </button>
                                    <button type={"button"}
                                            className={"btn btn-danger me-4 mb-4"}>
                                        Exit
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>);
}

export default EditProfileComponent;