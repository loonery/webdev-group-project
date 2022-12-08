import react, {useState} from 'react';
import CreateAndEditRecipeJournalForm
    from "./CreateAndEditRecipeJournalForm";
import RecipeJournal from "./index";
import SearchBar from "../../../SearchBar";

const RecipeJournalFeed = () => {

    const posts = [{}, {}, {}, {}, {}, {}];
    const [posting, setPosting] = useState(false);

    return(
        // container row for the list group
        <div className="row border rounded-top ms-1 me-1">

            {/*Posting button*/}
            {!posting &&
                <div>
                    <button className="btn btn-primary w-100 mt-3 me-2 btn-secondary"
                            onClick={() => setPosting(true)}>
                        Make a Recipe Journal
                    </button>
                </div>
            }

            {/*this div holds the recipe journal list*/}
            <div className="mt-3">
                {/*new journal entry conditionally appears at the top of the post list*/}
                {posting &&
                    <CreateAndEditRecipeJournalForm setPosting={setPosting}/>
                }

                {/*the rest of the posts appear below the post currently being created*/}
                {
                    posts.map((post, index) => (
                        <RecipeJournal/>
                    ))
                }
            </div>
        </div>
    )
}
export default RecipeJournalFeed;