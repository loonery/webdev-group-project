const Profile = () => {

    const userImage = './local_images/dummy_webdev.jpg';
    const userName = "James Hoffman";
    const userHandle = "@jamesHoffman"

    return (
        <>
            {/* profile banner image */}
            <div className="row border rounded pt-3 ps-3 pb-3">
                {/*profile picture */}
                <div className="col-3">
                    <img src={userImage}
                         className="rounded-circle"
                         height="150px"
                         width="150px"/>
                </div>
                <div className="fs-3">
                    <div>{userName}</div>
                    <div>{userHandle}</div>
                </div>
            </div>

            <div className="row border rounded mt-3 pt-3 ps-3 pb-3">
                General Profile Information
            </div>

            <div className="row border rounded mt-3 pt-3 ps-3 pb-3">
                Recipes and Recipe Collections
            </div>

            <div className="row border rounded mt-3 pt-3 ps-3 pb-3">
                Your Brewing Network
            </div>
        </>
    );
}

export default Profile;