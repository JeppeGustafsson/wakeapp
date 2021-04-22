import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Radio, Divider, Button } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/SetSound.module.css';

const SetSound = (props) => {
    const [selectedPage, setSelectedPage] = useState('/sound-settings');

    const history = useHistory();

    const handleChange = (event) => {
        setSelectedPage(event.target.value);
        history.push(event.target.value);
    };

    const handleClick = (event) => {
        props.setSound(
            event.currentTarget.firstElementChild
            .firstElementChild.innerHTML
        );
    }

    return (
        <main>
            <section className={Style.PickSound}>
                <h3>Pick alarm signal</h3>
                <Divider className="mb-2" />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Dog barks</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Bird sounds</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Waves</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Default</h4>
                </Button>
                <Divider />
            </section>
            <footer className={Style.Footer}>
                    <Radio
                        checked={selectedPage === '/alarm-settings'}
                        onChange={handleChange}
                        value="/alarm-settings"
                    />
                    <Radio
                        checked={selectedPage === '/time-settings'}
                        onChange={handleChange}
                        value="/time-settings"
                    />
                    <Radio
                        checked={selectedPage === '/date-settings'}
                        onChange={handleChange}
                        value="/date-settings"
                    />
                    <Radio
                        checked={selectedPage === '/sound-settings'}
                        onChange={handleChange}
                        value="/sound-settings"
                    />
            </footer>
        </main>
    )
};

export default SetSound;