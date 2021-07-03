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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Check from "./Components/Check/Check";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: ''
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
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
        <PrivateRoute path="/check">
        <Check />
          </PrivateRoute>
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


