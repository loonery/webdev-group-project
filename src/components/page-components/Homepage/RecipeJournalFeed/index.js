import react from 'react';
import RecipeJournalItem from "./RecipeJournalItem";

const RecipeJournalFeed = () => {
    return(

        // container row for the list group
        <div className="row border rounded-top ms-1 me-1">

            {/* header */}
            <h1 className="border-bottom pt-2 pb-2">Journal Feed</h1>

            {/*this div holds the recipe journal list*/}
            <div className="pb-2">
                <RecipeJournalItem/>
                <RecipeJournalItem/>
                <RecipeJournalItem/>
            </div>
        </div>
    )
}
export default RecipeJournalFeed;