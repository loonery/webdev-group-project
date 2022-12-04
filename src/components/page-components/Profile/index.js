const Profile = () => {

    const imageSource = './local_images/dummy_webdev.jpg';
    const userName = "James Hoffman";
    const userHandle = "@jamesHoffman"

    return (
        <>
            <div className="row my-3 mx-3 py-3">

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


            <div className="row border my-3 mx-3 py-3">
                <div>
                    General Profile Information
                </div>
            </div>

            <div className="row border my-3 mx-3 py-3">

                <div className="col border rounded my-3 mx-3 py-3 px-3">
                    Recipes and Recipe Collections
                </div>

                <div className="col border rounded my-3 mx-3 py-3 px-3">
                    Your Brewing Network
                </div>
            </div>
        </>
    );
}

export default Profile;