import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Landing from './landing';
import GridExample from './components/card/card';
import Navibar from './components/navibar/navibar';
import Blog_ from './components/blog-bar/blog';

import Blog from'./pages/blog/blog';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Footer from './components/Footer/footer';

import './App.css'



function App(props) {
  return (
    <div>
      <Navibar/>
  
      <Router>
        <Switch>
          <Route path='/' exact><Landing/></Route>
          <Route path='/about' exact><About/></Route>
          <Route path='/blog' exact><Blog/></Route>
          <Route path='/contact' exact><Contact/></Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
