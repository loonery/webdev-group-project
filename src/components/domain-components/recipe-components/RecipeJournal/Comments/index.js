const Comments = () => {


    return(
        // the card body houses the comments
        <div className="card-body border-bottom border-top">
            <div className="ps-2">Comments</div>

            {/* comments list component */}
            <div>
                <ul className={"pt-1 list-group"}>
                    <li className="list-group-item border-0">
                        <div className="d-flex">
                            <div className="mt-1">
                                <img className="rounded-circle"
                                     height="40"
                                     width={"40"}
                                     src={imageSource}/>
                            </div>

                            <div className="flex-grow-1 ms-3 form-group">
                                {/*user information in the card*/}
                                <div>{userName} - <span className="fs-6 text-secondary">{date}</span></div>
                                {/*user post text*/}
                                <p>{postText}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Comments;