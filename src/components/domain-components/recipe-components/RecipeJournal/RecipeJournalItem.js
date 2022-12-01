const RecipeJournalItem = () => {
    // todo: delete static image source
    const imageSource = './local_images/dummy_webdev_2.jpg';
    const userName = "Coffee Beans";
    const date = new Date();

    return(
        <div className="border rounded-top rounded mb-3 ps-2 pt-2 ms-1 me-1">

            {/* user information section of the journal*/}
            <div className="row pb-2">

                    {/* user profile picture */}
                    <div className="col-2 d-flex justify-content-center pt-1">
                        <img src={imageSource}
                             className="rounded-circle"
                             width="48px"
                             height="48px"
                        />

                        <i className="fa-solid"></i>

                    </div>

                    {/*user's post information*/}
                    <div className="col-10 ps-2">

                        {/*user information in each recipe*/}
                        <div>
                            <div>{userName}</div>
                            <div className="text-secondary">{date.toDateString()}</div>
                        </div>

                        <div className="fs-5">Post Title</div>

                        <div>
                            post text post text post text post text post text post text post text post text
                            post text post text post text post text post text post text post text post text
                            post text post text
                        </div>
                    </div>
            </div>

        </div>
    );
}
export default RecipeJournalItem