const Profile = () => {

    const userImage = './local_images/dummy_webdev.jpg';
    const userName = "James Hoffman";
    const userHandle = "@jamesHoffman"

    return (
        /*profile banner image*/
        <div className="row border rounded pt-3 ps-3">
            {/*profile picture overlaid over banner image*/}
            <div className="col-3">
                <img src={userImage}
                     className="rounded-circle"
                     height="150px"
                     width="150px"
                />
            </div>
            <div className="col-9">

                <div>{userName}</div>
                <div>{userHandle}</div>

            </div>
        </div>
    );
}

export default Profile;