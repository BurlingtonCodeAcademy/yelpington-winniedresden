import React from 'react';
import Restaurant from './components/Restaurant';
import './index.css';
import Map from './components/Map';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';


//this is the homepage functionality. will show the map on the homepage and then nav bar, which allows user to click any of the restaurants and go directly to their pages. user could also type in restaurants/restaurant-id in the URL to get to a specific restaurant 

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