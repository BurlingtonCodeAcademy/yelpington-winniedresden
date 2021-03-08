import React from 'react';
import Restaurant from './components./Restaurant';
import NotFound from './components./NotFound';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Map from './components./Map';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import L from "leaflet";
import Nav from './components./Nav';




function App() {

  return (
<div>
  
    <BrowserRouter>
      <Switch> 
        <Route exact path="/">
        <h1 id="title">Pizza in Denver</h1>
          <Map/>
          <Nav/>
        </Route>
        <Route path="/restaurants/:id" 
        render={(props) => {
          return props.match.isExact ? (
            <Restaurant match={props.match} /> 
          ) : (
            <Redirect to="/" />
          );
        }}/>
      </Switch>
    </BrowserRouter>
    <div id="root"></div> 

</div>
    
  );
}

export default App;