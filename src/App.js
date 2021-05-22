import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ProductCard from "./Components/ProductCart/ProductCard";
import Services from "./Components/Services/Services";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <ProductCard />
      <Services />
      <Footer />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
