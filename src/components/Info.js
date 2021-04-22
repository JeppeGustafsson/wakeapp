import { useState, useEffect, useCallback } from 'react';
import { } from '@material-ui/core';
import { } from '@material-ui/icons';
import Style from '../components/TopNav.module.css';
import TopNav from './TopNav';

const Info = (props) => {

    return (
        <section>
            <TopNav />
            <h1>Info</h1>
            <p>lorem ipsum</p>
        </section >
    )
};

export default Info;