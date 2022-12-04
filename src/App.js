import * as React from 'react';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import style from './App.css';
import Recettes from './components/Recettes.js';
import Blog from './components/Blog.js';
import Menu from './components/Menu';
import NoPage from './components/NoPage';


const App = () => {

    return (
        <div id='App'>
            <Menu />
            <Routes>
                <Route exact path='/' element={<Recettes />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );

};
export default App;
