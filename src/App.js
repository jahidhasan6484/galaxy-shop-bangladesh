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
import LoadProducts from "./Components/LoadProducts/LoadProducts";
import Services from "./Components/Services/Services";
import SingleProduct from "./Components/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <LoadProducts />
          <Services />
          <Footer />
        </Route>
        <Route path="/singleProduct/:id">
          <SingleProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
