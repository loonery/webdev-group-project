import {useSelector} from "react-redux";

const UserInfoSmall = () => {

    const imageSource = './local_images/dummy_webdev.jpg';

    const {currentUser} = useSelector((state) => state.users);

    if (!currentUser)
        return(
            <>
                <div className={"border fw-bolder justify-content-center align-content-center text-center"}>
                    Please go to the profile tab to see your profile summary.
                </div>
            </>
        )
    else
        return(
            <>
                <div className="card w-100">
                    {/* user profile picture flex box */}
                    <div className="card-body d-flex">
                        {/* user's profile picture */}
                        <div className="my-1 me-3">
                            <img className="rounded-circle"
                                 height="40"
                                 width={"40"}
                                 src={imageSource}/>
                        </div>

                        <div>
                            <div className={"fw-bold"}>{currentUser.firstName} {currentUser.lastName} ({currentUser.role})</div>
                            <div className="text-secondary">@{currentUser.userName}</div>
                        </div>
                    </div>

                    {/* user stats section */}
                    {/* todo: add some fontawesome icons here */}
                </div>
            </>
        )
}

export default UserInfoSmall;
