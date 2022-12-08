import AbridgedDomainItem from "../AbridgedCollectionOrRecipe";
import {useState} from "react";
import CommentEntry from "./Comments/CommentEntry";
import CommentsSection from "./Comments";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular} from "@fortawesome/fontawesome-svg-core/import.macro";

const RecipeJournal = () => {
    // todo: refactor as modal?
    // todo: delete static image source
    const imageSource = './local_images/dummy_webdev_2.jpg';
    const userName = "Coffee Beans";
    const date = new Date().toDateString();
    const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
        " labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat."

    const [commenting, setCommenting] = useState(false);

    // todo: add dynamic rendering of comments box
    return(
        <>

            <div className="card mb-4">

                {/*recipe journal's title*/}
                <div className="card-header">
                    <span className="fw-bold fs-5">Post Title</span>
                </div>

                {/* this card body houses the entire post content */}
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
                            <div className="text-secondary">{userName} - <span>{date}</span></div>
                        </div>
                    </div>

                    {/*this div houses all post content */}
                    <div className={"ps-4 pe-4"}>

                        {/*user post text*/}
                        <p className="mt-3">{postText}</p>

                        {/*recipe information for recipe related to the post*/}
                        <div className="border rounded py-3 px-3">
                            <AbridgedDomainItem/>
                        </div>

                        {/*comment and like buttons, and stats */}
                        <div className={'pt-4 ps-2 pe-2'}>
                            {/*todo: format this text to be significantly smaller*/}
                            {/*todo: Make the likes section a link to the list of people who liked this post*/}
                            <span>0 likes</span>
                            <span>&ensp;|&ensp;</span>
                            <span>10 comments</span>

                            {/* comment and like buttons */}
                            <div className="float-end">
                                <button className="btn">
                                    <FontAwesomeIcon icon={regular('thumbs-up')}/>
                                </button>

                                {/*button - toggle the comments section*/}
                                <button className="btn ms-2"
                                        onClick={() => setCommenting(!commenting)}>
                                    <FontAwesomeIcon icon={regular('comment')}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* dynamically rendered comment section and comment entry */}
                {commenting &&
                    <>
                        {/*list of comments for this post*/}
                        <CommentsSection/>

                        {/*comment entry section*/}
                        <CommentEntry imageSource={imageSource}/>
                    </>
                }
            </div>
        </>
    );
}
export default RecipeJournal