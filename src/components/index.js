import HomeComponent from "./page-components/Homepage";
import ProfileComponent from "./page-components/Profile";
import {Routes, Route} from "react-router";
import NavigationBar from "./NavigationBar";
import RecipeCollection from "./domain-components/recipe-components/RecipeCollection";

function Coffee() {
    return(
            <div className="container mt-2 pt-2">

                {/* render the navigation bar on every screen for a logged in user */}
                <NavigationBar/>

                {/* Routing occurs for each page */}
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/*"
                           element={<HomeComponent/>}/>
                    <Route path="profile/*"
                           element={<ProfileComponent/>}/>
                    <Route path="search/*"
                           element={<RecipeCollection/>}/>
                </Routes>
            </div>
    );
}
export default Coffee