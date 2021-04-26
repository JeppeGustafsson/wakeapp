import { useState, useEffect, useCallback } from 'react';
import { } from '@material-ui/core';
import { } from '@material-ui/icons';
import Style from '../components/TopNav.module.css';
import { Link } from "react-router-dom";


const TopNav = (props) => {

    const [isActive, setActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);


    const handleNav = () => {
        if (setActiveMenu(activeMenu)) {
            
        } else {
            setActive(!isActive)
        }

    }
    return (
        <div className={activeMenu === false ?
            Style.wrap  : Style.wrapper + ' wrapper'}>
            <header className={Style.header}>

                <section className={activeMenu === false ?
                    Style.hamburger + ' not-active' : Style.hamburger + ' active'}
                    onClick={activeMenu === false ?
                        () => setActiveMenu(true) :
                        () => setActiveMenu(false)}>
                    <div className={Style.line}></div>
                    <div className={Style.line}></div>
                    <div className={Style.line}></div>
                </section>
                </header>
                <nav className={activeMenu === false ?
                    Style.nav  : Style.navv}>
                        

                    <section className={activeMenu === false ? 
                    Style.close_menu + ' close-menu'  : Style.nav_menu}>
                        <article className={Style.borderstyle}>

                        <Link to="/alarm-settings" className={Style.link}>Favourites</Link>
                        </article>
                        <article className={Style.borderstyle}>
                        <Link to="/alarm-settings" className={Style.link}>Set alarm/Schedule</Link>
                        </article>
                        <article className={Style.borderstyle}>
                        <Link to="/alarm-settings" className={Style.link}>Info</Link>
                        </article>
                    </section>

                </nav>

            
        </div>
    )
};

export default TopNav;