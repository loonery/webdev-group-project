import HomeComponent from "./page-components/Homepage";
import ProfileComponent from "./page-components/Profile";
import LoginComponent from "./page-components/Login";
import {Routes, Route} from "react-router";
import NavigationBar from "./NavigationBar";

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
                    <Route path="login/*"
                           element={<LoginComponent/>}/>
                </Routes>
            </div>
    );
}
export default Coffee