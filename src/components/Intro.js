import { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Style from '../components/Intro.module.css';
import logo from '../content/images/logo.png';


const Intro = (props) => {



    return (
        <section>
            <img src={logo} className={Style.Logo} />
        </section>
    )
};

export default Intro;