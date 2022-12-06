import CommentItem from "./CommentItem";
import Step from "../../../recipe-components/RecipeStep";

const CommentsSection = () => {

    const comments = [{}, {}, {}, {}, {}];

    const imageSource = './local_images/dummy_webdev_2.jpg';
    const userName = "Coffee Beans";
    const date = new Date().toDateString();
    const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
        " labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
        "aliquip consequat."

    return(
        // the card body houses the comments
        <div>
            <ul className={"pt-1 list-group"}>
                <div className="card-body border-bottom border-top">
                    <div className="ps-2">Comments</div>

                    {/*todo: map each comment object to a comment item here*/}
                    {comments.map((comment, index) => (
                            <CommentItem imageSource={imageSource}
                                         userName={userName}
                                         date={date}
                                         postText={postText}/>
                    ))}
                </div>
            </ul>
        </div>
    );
}
export default CommentsSection;