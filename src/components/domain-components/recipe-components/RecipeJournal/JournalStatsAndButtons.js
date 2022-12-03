import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular} from "@fortawesome/fontawesome-svg-core/import.macro";

const JournalStatsAndButtons = () => {

    // todo: parameterize this component
    const likes = 10;
    const comments = 3;

    return(
        <div className={'pt-4 ps-2 pe-2'}>
            {/*todo: format this text to be significantly smaller*/}
            {/*todo: Make the likes section a link to the list of people who liked this post*/}
            <span>{likes} likes | {comments} comments</span>

            {/* comment and like buttons */}
            <div className="float-end">
                <button className="btn">
                    <FontAwesomeIcon icon={regular('thumbs-up')}/>
                </button>
                <button className="btn ms-2">
                    <FontAwesomeIcon icon={regular('comment')}/>
                </button>
            </div>
        </div>
    );
}
export default JournalStatsAndButtons;
