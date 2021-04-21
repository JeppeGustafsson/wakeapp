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

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/alarm-settings">
          <SetAlarm />
        </Route>
        <Route path="/sound-settings">
          <SetSound />
        </Route>
        <Route path="/time-settings">
          <SetMessageAndTime />
        </Route>
        <Route path="/date-settings">
          <SetDate />
        </Route>
        <Route path="/active-alarm">
          <ActiveAlarm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
