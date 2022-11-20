import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </div>
  );
}

export default App;
