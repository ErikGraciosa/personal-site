import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import StaticData from '../staticData/StaticData';
import Footer from '../footer/Footer';
import SiteThumbnail from '../siteThumbnail/SiteThumbnail';
import './reset.css';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <StaticData/>
        <Switch>
          <Route
            exact path="/"
            component={HomePage}/>
          <Route
            exact
            path="/site-preview-thumbnail"
            component={SiteThumbnail}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
