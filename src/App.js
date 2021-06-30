import React, { createContext, useState } from "react";
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
import LogIn from "./Components/LogIn/LogIn";
import Services from "./Components/Services/Services";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import AddAdmin from "./Components/AddAdmin/AddAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    {/* <AddAdmin /> */}
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          {/* <AddAdmin /> */}
          <LoadProducts />
          <Services />
          <Footer />
        </Route>
        <Route path="/singleProduct/:id">
          <SingleProduct />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;


