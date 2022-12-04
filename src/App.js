import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './App.css';
import Recettes from './components/Recettes.js';
import Blog from './components/Blog.js';
import Menu from './components/Menu';
import NoPage from './components/NoPage';


const App = () => {

    return (
        <div id='App'>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route index element={<Recettes />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );

};
export default App;