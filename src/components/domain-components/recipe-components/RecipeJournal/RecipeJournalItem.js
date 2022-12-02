const RecipeJournalItem = () => {
    // todo: delete static image source
    const imageSource = './local_images/dummy_webdev_2.jpg';
    const userName = "Coffee Beans";
    const date = new Date();

    // help from this website to construct general feeling of the component using cards
    // https://mdbootstrap.com/docs/standard/extended/comments/

    return(
        <>
        <div className="card mb-3 ms-2 mt-2 ms-1 me-1">
            {/* user information section of the journal*/}
            <div className="d-flex justify-content-evenly pb-2">
                    {/* user profile picture */}
                    <div className="ps-1 pt-2">
                        <img src={imageSource}
                             className="flex-fill rounded-circle"
                             width="48px"
                             height="48px"
                        />
                    </div>

                    {/*user's post information*/}
                    <div className="ms-3">
                        {/*user information in each recipe*/}
                        <div>
                            <div>{userName}</div>
                            <div className="text-secondary">{date.toDateString()}</div>
                        </div>

                        <div className="fs-5">Post Title</div>

                        <div className="pt-1">
                            post text post text post text post text post text post text post text post text
                            post text post text post text post text post text post text post text post text
                            post text post text
                        </div>
                    </div>
            </div>

            {/*houses the comment section*/}
            <div className="d-flex pb-2">
                {/* user profile picture */}
                <div className="me-auto">
                    <textarea className="form-control">

                    </textarea>
                </div>
                <div className={"border"}>aaa</div>

            </div>
        </div>
        </>
    );
}
export default RecipeJournalItem