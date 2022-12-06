import RecipeJournalItem from "../../../domain-components/post-components/RecipeJournal/RecipeJournalItem";
import CreateEditRecipeJournal
    from "../../../domain-components/post-components/RecipeJournal/CreateEditRecipeJournal";

const RecipeJournalFeedAddingElement = () => {


    return(
        // container row for the list group
        <div className="row border rounded-top ms-1 me-1">

            {/* header */}
            <div className="mb-3">
                <button className="btn btn-primary disabled w-100 mt-3 me-2 btn-secondary">
                    Make a Recipe Journal
                </button>
            </div>

            {/*this div holds the recipe journal list*/}
            <div className="pb-2">
                <CreateEditRecipeJournal/>
                <RecipeJournalItem/>
                <RecipeJournalItem/>
            </div>
        </div>
    )
}
export default RecipeJournalFeedAddingElement;