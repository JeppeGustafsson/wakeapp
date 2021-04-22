import { Route, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Home from './components/Home';
import SetAlarm from './components/SetAlarm';
import SetSound from './components/SetSound';
import SetMessageAndTime from './components/SetMessageAndTime';
import SetDate from './components/SetDate';
import ActiveAlarm from './components/ActiveAlarm';
import './App.css';

function App() {
  const [alarms, setAlarms] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState('Message');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedDate, setSelectedDate] = useState('Monday');
  const [selectedSound, setSelectedSound] = useState('Dog barks');

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home alarms={alarms} />
        </Route>
        <Route path="/alarm-settings">
          <SetAlarm 
            message={selectedMessage}
            time={selectedTime}
            date={selectedDate}
            sound={selectedSound}
            addAlarm={(e) => setAlarms(old => [...old, e])} />
        </Route>
        <Route path="/sound-settings">
          <SetSound setSound={e => setSelectedSound(e)} />
        </Route>
        <Route path="/time-settings">
          <SetMessageAndTime setMessage={e => setSelectedMessage(e)} setTime={e => setSelectedTime(e)} />
        </Route>
        <Route path="/date-settings">
          <SetDate setDate={e => setSelectedDate(e)} />
        </Route>
        <Route path="/active-alarm">
          <ActiveAlarm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
