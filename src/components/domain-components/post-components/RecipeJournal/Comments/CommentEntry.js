
const CommentEntry = ({imageSource}) => {

    return(
        <div className="card-footer">
            <div className="d-flex">
                <div className="mt-1">
                    <img className="rounded-circle"
                         height="40"
                         width={"40"}
                         src={imageSource}/>
                </div>

                <div className="flex-grow-1 ms-3 form-group">
                            <textarea className="form-control w-100"
                                      placeholder="Say something nice, here!"
                                      id="comments-box"
                                      rows={3}
                            />
                </div>

                <div className="d-flex align-items-center ms-3">
                    <div>
                        <button type="button" className="w-100 btn btn-outline-dark btn-sm">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentEntry;