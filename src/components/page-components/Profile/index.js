import RecipeCollection from "../../domain-components/recipe-components/RecipeCollection";

const Profile = () => {

    const imageSource = './local_images/dummy_webdev.jpg';
    const userName = "James Hoffman";
    const userHandle = "@jamesHoffman"



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
                <div className="border rounded">
                    General Profile Information
                </div>
            </div>

            {/*container for user's recipes and recipe collections*/}
            <div className="my-2 mx-2 py-1 px-1">

                <div className="d-flex">
                    {/*todo: user's saved recipes should be listed here*/}
                    <div className="pe-2"><RecipeCollection/></div>

                    {/*todo: user's saved collections should be listed here*/}
                    <div className="ps-2"><RecipeCollection/></div>
                </div>

                <div className="border rounded">
                    Your Brewing Network
                </div>
            </div>
        </>
    );
}

export default Profile;