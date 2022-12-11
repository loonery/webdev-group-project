import './App.css';
import Coffee from "./components";
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import recipesReducer from "./reducers/recipes-reducer";
import userReducer from "./reducers/user-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import CurrentUser from "./components/page-components/Profile/CurrentUser";

/**
 * The store for the application
 */
const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        users: userReducer
    }
});


const App = () => {
  return (
    <Provider store={store}>
        <CurrentUser>
            <BrowserRouter>
                <div className="container">
                  <Routes>
                    <Route path="/*" element={<Coffee/>}/>
                  </Routes>
                </div>
            </BrowserRouter>
        </CurrentUser>
    </Provider>
  );
}

export default App;