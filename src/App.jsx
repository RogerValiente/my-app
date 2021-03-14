import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
import ItemDetailContainer from "./containers/ItemDetailContainer/index";
// import Formulario from "./components/Formulario/index";
import Cart from "./components/Cart/Index";
import Store from "./Store/Store";

function App() {
  return (
    <Store>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/producto/:categoria/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/carrito">
            <Cart />
          </Route>
          {/* <Route exact path="/formulario">
            <Formulario />
          </Route> */}
          <Route exact path="/catalog/:categoria">
            <ItemListContainer />
          </Route>
          <Route exact path="/catalog">
            <ItemListContainer />
          </Route>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
