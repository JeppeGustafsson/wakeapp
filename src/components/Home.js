import { useState, useEffect, useCallback } from 'react';
import {  } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/Home.module.css';
import Alarm from "../components/Alarm"

const Home = (props) => {

    return (
        <section>

            <h2 className={Style.logo}>Wakeapp</h2>
            <Alarm />
        </section>
    )
};

export default Home;