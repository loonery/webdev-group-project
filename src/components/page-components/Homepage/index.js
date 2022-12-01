import react from 'react';
import NavigationBar from "../../NavigationBar";
import UserInfoSmall from "./UserInfoSmall";
import RecipeJournalFeed from "./RecipeJournalFeed";

const HomeComponent = () => {
    // todo: add routing here to enforce different versions of the homepages
    return (
        <div className="row">
            <div className="col-4">
                <UserInfoSmall/>
            </div>

            <div className="col-8">
                <RecipeJournalFeed/>
            </div>
        </div>
    );
}

export default HomeComponent;