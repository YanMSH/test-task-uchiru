import React from 'react';
import classes from "./Header.module.css";
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className={classes.header}>
            <div className={classes.header_links}>
                <div
                    className={location.pathname === '/' ? `${classes.header_link_item} ${classes.header_link_active}` : classes.header_link_item}>
                    <NavLink to='/'>Все котики</NavLink>
                </div>
                <div
                    className={location.pathname === '/favourites' ? `${classes.header_link_item} ${classes.header_link_active}` : classes.header_link_item}>
                    <NavLink to="/favourites">Любимые
                        котики</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;