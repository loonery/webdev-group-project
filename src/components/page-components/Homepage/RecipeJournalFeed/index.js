import react, {useState} from 'react';
import RecipeJournalItem from "../../../domain-components/post-components/RecipeJournal/RecipeJournalItem";
import CreateEditRecipeJournal
    from "../../../domain-components/post-components/RecipeJournal/CreateEditRecipeJournal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel} from "@fortawesome/free-solid-svg-icons";

const RecipeJournalFeed = () => {

    const posts = [{}, {}, {}, {}, {}, {}];
    const [posting, setPosting] = useState(false);

    return(
        // container row for the list group
        <div className="row border rounded-top ms-1 me-1">

            {/*Posting button*/}
            {!posting &&
                <div className="mb-3">
                    <button className="btn btn-primary w-100 mt-3 me-2 btn-secondary"
                            onClick={() => setPosting(!posting)}>
                        Make a Recipe Journal
                    </button>
                </div>
            }
            {/*Cancel posting button*/}
            {posting &&
                <div className="mb-3">
                    <button className="btn btn-primary w-100 mt-3 me-2 btn-secondary"
                            onClick={() => setPosting(!posting)}>
                        <FontAwesomeIcon icon={faCancel}/> Cancel Journal Post
                    </button>
                </div>
            }

            {/*this div holds the recipe journal list*/}
            <div>
                {posting &&
                    <CreateEditRecipeJournal/>
                }
                {
                    posts.map((post, index) => (
                        <RecipeJournalItem/>
                    ))
                }
            </div>
        </div>
    )
}
export default RecipeJournalFeed;