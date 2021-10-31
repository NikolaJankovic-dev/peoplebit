import React from 'react';
import { useEffect, useState } from 'react';
import { Router,Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about/:title" component={About} />
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;
