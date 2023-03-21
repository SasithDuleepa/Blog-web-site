import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Landing from './landing';
import GridExample from './components/card/card';
import Navibar from './components/navibar/navibar';


function App(props) {
  return (
    <div>
      <Navibar/>
      <Router>
        <Switch>
          <Route path='/' exact><Landing/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
