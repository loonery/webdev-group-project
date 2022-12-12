import HomeComponent from "./page-components/Homepage";
import ProfileComponent from "./page-components/Profile";
import LoginComponent from "./page-components/Login"
import RegisterComponent from "./page-components/Register"
import {Routes, Router, Route} from "react-router";
import NavigationBar from "./NavigationBar";
import Creator from "./page-components/Creator";
import Demo from "./page-components/Demo";
import ModalComponent from "./page-components/ModalComponent";

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
                    <Route path="login"
                           element={<LoginComponent/>}/>
                    <Route path="register"
                           element={<RegisterComponent/>}/>
                    <Route path="create/*"
                           element={<Creator/>}/>
                    <Route path="demo/*"
                           element={<Demo/>}/>
                    <Route path="demo/details/:id"
                           //add modal component to the page but take in parameter of the route
                            element={<ModalComponent/>}/>
                </Routes>
            </div>
    );
}
export default Coffee