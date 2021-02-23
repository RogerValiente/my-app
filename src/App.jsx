import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
import ItemDetailContainer from "./containers/ItemDetailContainer/index";
import Cart from "./components/Cart/Index";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/carrito">
            <Cart />
          </Route>
          <Route exact path="/catalog">
            <ItemListContainer />
          </Route>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
