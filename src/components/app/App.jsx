import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import StaticData from '../staticData/StaticData';
import Footer from '../footer/Footer';
import SiteThumbnail from '../siteThumbnail/SiteThumbnail';
import './reset.css';
import './App.css';
import PinballTable from '../pinballTable/PinballTable';
import Pinball from '../../fixtures/pinball.json';


export default function App() {

  const Layout = ({ children }) => (
    <div>
      <StaticData />
        {children}
    </div>
  )

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/site-preview-thumbnail"
            component={SiteThumbnail}/>
          <Route
            exact
            path="/secret-ship-show-pintips"
            component={(props) => <PinballTable data={Pinball} />} />
          <Layout>
            <Route
              exact path="/"
              component={HomePage}/>
          </Layout>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
