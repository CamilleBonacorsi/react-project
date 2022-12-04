import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import style from '../App.css';

const Menu = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "#fa7445",
    };
    let unactiveStyle = {
        textDecoration: "none",
        color: "white",
    };


    return (
        <>
            <nav>
                <div style={{ margin: '10px' }}>
                    <NavLink exact to="/" style={({ isActive }) =>
                        isActive ? activeStyle : unactiveStyle
                    }>
                        Recettes
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink exact to="/blog" style={({ isActive }) =>
                        isActive ? activeStyle : unactiveStyle
                    }>
                        Blog
                    </NavLink>
                </div>
            </nav >
            <Outlet />

        </>
    )

};

export default Menu;