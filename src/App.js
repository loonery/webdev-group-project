import './App.css';
import Coffee from "./components";
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/*" element={<Coffee/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;