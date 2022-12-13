import react, {useEffect, useState} from 'react';
import CreateAndEditRecipeJournalForm
    from "./CreateAndEditRecipeJournalForm";
import RecipeJournal from "./index";
import SearchBar from "../../../SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {findPostsThunk} from "../../../../services/posts-thunks";

const RecipeJournalFeed = () => {

    // const posts = [{}, {}, {}, {}, {}, {}];
    const dispatch = useDispatch();
    const {posts, loading} = useSelector(state => state.posts)
    useEffect(() => {dispatch(findPostsThunk())}, [])
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
                {console.log("post", loading, posts)}
                {
                    // posts.map((post, index) => (
                    posts.map((post, index) => (
                        <RecipeJournal key={post._id} post={post} />
                    ))

                }
            </div>
        </div>
    )
}
export default RecipeJournalFeed;