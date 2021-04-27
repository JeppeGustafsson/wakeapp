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
            setActiveMenu(!activeMenu)
        }

    }
    return (
        <div className={activeMenu === false ?
            Style.wrap + ' wrapp' : Style.wrapper + ' wrapper'}>
            <header className={Style.header}>

                <div className={activeMenu === false ?
                    Style.hamburger + ' not-activee' : Style.hamburger + ' activee'}
                    onClick={activeMenu === false ?
                        () => setActiveMenu(true) :
                        () => setActiveMenu(false)}>
                    <div className={Style.line}></div>
                    <div className={Style.line}></div>
                    <div className={Style.line}></div>
                </div>
            </header>
            <nav className={activeMenu === false ?
                Style.nav : Style.navv}>


                <section className={activeMenu === false ?
                    Style.close_menu + ' close-menu' : Style.nav_menu}>
                    <article className={Style.borderstyle}>
                        <Link to="/alarm-page" onClick={handleNav} className={Style.link}>Home</Link>
                    </article>
                    <article onClick={handleNav} className={Style.borderstyle}>
                        <Link to="/alarm-settings" className={Style.link}>Set alarm</Link>
                    </article>
                    <article onClick={handleNav} className={Style.borderstyle}>
                        <Link to="/info-page" className={Style.link}>Info</Link>
                    </article>
                </section>

            </nav>


        </div>
    )
};

export default TopNav;