import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import LeftSidebar from './components/LeftSidebar';
// import Feed from './components/Feed';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
