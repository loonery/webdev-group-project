import HomeComponent from "./page-components/Homepage";
import ProfileComponent from "./page-components/Profile";
import {Routes, Route} from "react-router";
import NavigationBar from "./NavigationBar";
import CreateAndEditRecipe from "./domain-components/recipe-components/Recipe";
import Recipe from "./domain-components/recipe-components/Recipe";

function  Coffee() {
    return(
            <div className="mt-2 pt-2">

                {/* render the navigation bar on every screen for a logged-in user */}
                <NavigationBar/>

                {/* Routing occurs for each page */}
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/*"
                           element={<HomeComponent/>}/>
                    <Route path="profile/*"
                           element={<ProfileComponent/>}/>
                    <Route path="search/*"
                           element={<Recipe/>}/>
                </Routes>
            </div>
    );
}
export default Coffee