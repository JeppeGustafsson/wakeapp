import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Home from './components/Home';
import Info from './components/Info';
import SetAlarm from './components/SetAlarm';
import SetSound from './components/SetSound';
import SetMessageAndTime from './components/SetMessageAndTime';
import SetDate from './components/SetDate';
import ActiveAlarm from './components/ActiveAlarm';
import './App.css';
import TopNav from './components/TopNav';
import Intro from './components/Intro';



function App() {
  const [alarms, setAlarms] = useState([]);
  const [activeAlarm, setActiveAlarm] = useState({});
  const [selectedMessage, setSelectedMessage] = useState('Message');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedDate, setSelectedDate] = useState('Monday');
  const [selectedSound, setSelectedSound] = useState('Dog barks');

  const history = useHistory();

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const triggerAlarm = () => {
    let d = new Date();
    let weekdays = ["Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday", "Saturday"];
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = h + ':' + m;
    let today = weekdays[d.getDay()];

    alarms.forEach(alarm => {
      if (time == alarm.time && today == alarm.day && alarm.active === true) {
        setActiveAlarm(alarm);
        history.push("/active-alarm");
      }
    });
  };


  const interval = () => {
    setInterval(triggerAlarm, 1000);
  }

  useEffect(() => {
    interval();
  },[triggerAlarm]);


  return (
      <div className="App">
        <Switch>
        <Route exact path="/">
            <Intro />
        </Route>
        <Route path="/active-alarm">
            <ActiveAlarm alarm={activeAlarm} />
        </Route>
          <Route path="/alarm-page">
            <TopNav />
            <Home alarms={alarms} />
          </Route>
          <Route path="/info-page">
            <TopNav />
            <Info />
          </Route>
          <Route path="/alarm-settings">
            <TopNav />
            <SetAlarm
              message={selectedMessage}
              time={selectedTime}
              date={selectedDate}
              sound={selectedSound}
              addAlarm={e => setAlarms(old => [...old, e])} />
          </Route>
          <Route path="/sound-settings">
            <TopNav />
            <SetSound setSound={e => setSelectedSound(e)} />
          </Route>
          <Route path="/time-settings">
            <TopNav />
            <SetMessageAndTime setMessage={e => setSelectedMessage(e)} setTime={e => setSelectedTime(e)} />
          </Route>
          <Route path="/date-settings">
            <TopNav />
            <SetDate setDate={e => setSelectedDate(e)} />
          </Route>
        </Switch>
      </div>
    )
  }

//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/">
//           <div className="App">
//             <Intro />
//           </div>
//         </Route>
//         <Route path="/active-alarm">
//           <div className="App">
//             <ActiveAlarm alarm={activeAlarm} />
//           </div>
//         </Route>
//         <Route component={DefaultRoutes} />
//       </Switch>
//     </div>
//   );
// }

export default App;
