import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
