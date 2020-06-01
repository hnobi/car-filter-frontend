import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Filter from './Components/Filter';
import CarOwners from "./Components/CarOwner";


import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/filter/:id" component={CarOwners} />
          <Route path="/">
            <Filter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// width: 50px;
//     margin-top: -29px;
//     margin-left: 25px;
//     margin-bottom: 30px;