
// todo: refactor the recipe journal details to create this journal
import AbridgedDomainItem from "../AbridgedRecipe";
import JournalStatsAndButtons from "./JournalStatsAndButtons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel} from "@fortawesome/free-solid-svg-icons/faCancel";

const CreateEditRecipeJournal = () => {

    const imageSource = './local_images/dummy_webdev_2.jpg';
    const userName = "Coffee Beans";
    const date = new Date().toDateString();
    const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
        " labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat."

    return (
        <>
            <div className="card mb-4">
                <div className="card-header">
                    <div>
                        <span className="fw-bold fs-5">Post Title</span>
                    </div>
                </div>
                <div className="card-body">

                    {/*this div houses the user's image, data and post metadata that appear in the post*/}
                    <div className="d-flex">
                        {/*user image on the recipe journal*/}
                        <div className="mr-auto">
                            <img className="rounded-circle"
                                 height="70"
                                 width={"70"}
                                 src={imageSource}/>
                        </div>

                        {/* Rest of the post content sits within a flex to the right of the profile
                         picture information*/}
                        <div className="fs-6 ms-3">
                            {/*user information in the card*/}
                            <div className="pt-2">{userName}</div>
                            <div className="text-secondary">{userName} - <span>{date}</span></div>
                        </div>
                    </div>

                    {/*this div houses all post content */}
                    <div className={"px-4"}>

                        {/*user post text*/}
                        <div className="form-group my-3">
                            <textarea className="form-control">

                            </textarea>
                        </div>

                        {/*recipe information for recipe related to the post*/}
                        <div className="border rounded"><AbridgedDomainItem/></div>

                        {/*comment and like buttons, and stats */}
                        <JournalStatsAndButtons/>

                    </div>
                </div>

                {/*card footer houses the comments section*/}
                {/* todo : factor this out into a 'comment' component */}
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

                {/* this card footer houses the comments*/}
                {/*todo: replace with my factored out component*/}
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

                        <div className="mt-2 pt-1 ms-3">
                            <div>
                                <button type="button" className="w-100 btn btn-outline-dark btn-sm">Post</button>
                            </div>
                            <div>
                                <button type="button" className="w-100 mt-2 btn btn-outline-dark btn-sm">
                                    <FontAwesomeIcon icon={faCancel}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateEditRecipeJournal;