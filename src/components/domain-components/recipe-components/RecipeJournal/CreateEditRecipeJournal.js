// todo: refactor the recipe journal details to create this journal
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
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
                        <div className="flex-grow-1 fs-6 ms-3">
                            {/*user information in the card*/}
                            <div className="pt-2">{userName}</div>
                            <div className="text-secondary">{userName} - <span>now</span></div>
                        </div>

                        <div className="px-2">
                            <button className="btn btn-outline-dark btn-sm">
                                <FontAwesomeIcon icon={faCancel}/>
                            </button>
                        </div>
                    </div>

                    {/*this div houses all post content */}
                    <div className={"px-4"}>

                        {/* post title */}
                        <div className="my-4">
                            <input className="form-control"
                                   placeholder="How would you like to title this post?"
                                   id={"recipe-journal-title-input"}
                            />
                        </div>


                        {/*user post text input*/}
                        <div className="my-4">
                            <textarea className="form-control"
                                      placeholder="What do you want to say about this experience?"
                                      rows={3}
                                      style={{resize: "none"}}
                                      id={"recipe-journal-description-input"}
                            />
                        </div>

                        {/*recipe information for recipe related to the post*/}
                        <button className="btn btn-outline-dark w-100 mb-3">
                            <span className="fs-6">Link a recipe related to this experience</span>
                        </button>

                        <button className="btn btn-outline-dark w-100">
                            <span className="fs-6">Post</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CreateEditRecipeJournal;