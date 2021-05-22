import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ProductCard from "./Components/ProductCart/ProductCard";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <ProductCard />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
