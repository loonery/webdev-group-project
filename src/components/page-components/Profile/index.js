import DomainItemCollection from "../../domain-components/recipe-components/RecipeCollection";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {logoutUserThunk} from "../../../services/user-thunks";

const Profile = () => {

    const imageSource = './local_images/dummy_webdev.jpg';

    const {currentUser, loading} = useSelector((state) => state.users);

    console.log(currentUser)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUserThunk()).then(() => navigate('/login'))
    }

    if (loading)
        return (
            <h1>Loading</h1>
        )

    else if (!currentUser)
        return (
            <>
                <div className="row justify-content-center align-content-center  text-center fs-1 fw-bold">
                    You are not logged in. <br/>
                    Please log in to see your profile.
                    <div className={"row justify-content-center align-content-center"}>
                        <div className="text-center">
                            <Link to="/login">
                                <button type="button"
                                        className="btn btn-primary fw-bold text-bg-success me-4">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button type="button"
                                        className="btn btn-primary fw-bold text-bg-secondary ms-4">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </>
        )

    else
        return (
            <>
                <div className="row my-2 mx-2 py-1 px-1">

                    {/* profile banner image */}
                    <div className="d-flex rounded border py-3 ps-3">
                        <div className="">
                            <img className="rounded-circle"
                                 height="150"
                                 width={"150"}
                                 src={imageSource}/>
                        </div>
                    </div>
                </div>

                {/* profile information */}
                <div className="row my-2 mx-2 py-1 px-1">
                    <div className="fw-bold fs-3 border rounded">
                        General Profile Information
                        <div className={'col fw-light fs-4'}>
                            Name: {currentUser.userName}
                            <button type={"button"}
                                    className={"btn btn-primary float-end me-4 mb-4"}
                                    onClick={handleLogout}>
                                Logout
                            </button>
                            <br/>
                            Password: {currentUser.password}

                        </div>
                    </div>

                </div>

                {/*container for user's recipes and recipe collections*/}
                <div className="my-2 mx-2 py-1 px-1">

                <div className="d-flex">
                    {/*todo: user's saved recipes should be listed here*/}
                    <div className="pe-2"><DomainItemCollection/></div>

                    {/*todo: user's saved collections should be listed here*/}
                    <div className="ps-2"><DomainItemCollection/></div>
                </div>

                    <div className="border rounded">
                        Your Brewing Network
                    </div>
                </div>
            </>
    );
}

export default Profile;