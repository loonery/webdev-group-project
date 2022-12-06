import './App.css';
import Coffee from "./components";
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import recipesReducer from "./reducers/recipes-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

/**
 * The store for the application
 */
const store = configureStore({
    reducer: {
        recipesData: recipesReducer,
    }
});


const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
              <Routes>
                <Route path="/*" element={<Coffee/>}/>
              </Routes>
            </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;