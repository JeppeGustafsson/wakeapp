import { useState, useEffect, useCallback } from 'react';
import {  } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/Alarm.module.css';

const Alarm = (props) => {

    const [cardClass, setCardClass] = useState("active");

    const changeBackground = () => {
        if (cardClass === "inactive") {
            setCardClass("active")
        } else {
            setCardClass("inactive")
        }
    }

    return (
        <section className={cardClass}>

            <section className={Style.firstRow}>

                <h3 className={Style.alarmTime}>{props.time}</h3>

                <label className={Style.switchOnOff}>
                    <input type="checkbox"></input>
                    <span className={Style.sliderOnOff} onClick={changeBackground}></span>
                </label>
                
            </section>

            <p className={Style.alarmFor}>{props.message}</p>
            <p className={Style.alarmFor}>{props.day}</p>

        </section>
    )
};

export default Alarm;