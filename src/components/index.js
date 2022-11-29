import HomeComponent from "./Homepage";
import ProfileComponent from "./Profile";
import LoginComponent from "./Login";
import {Routes, Route} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore({reducer: {}});

function Coffee() {
    return(
        <Provider store={store}>
            <div>
                <Routes>
                    // '/*' added to path to allow for child routing
                    <Route index element={<HomeComponent/>}/>
                    <Route path="home/*"
                           element={<HomeComponent/>}/>
                    <Route path="profile/*"
                           element={<ProfileComponent/>}/>
                    <Route path="login/*"
                           element={<LoginComponent/>}/>
                </Routes>
            </div>
        </Provider>
    );
}
export default Coffee