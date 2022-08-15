import React from "react";
import './App.css';
import LogIn from "./component/LogIn";
import VistaMesero from "./component/VistaMesero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pedidos from "./component/Pedidos";
import VistaChef from "./component/VistaChef";
import EstadoPedidos from "./component/EstadoPedidos";



function App() {
  return (
    <div className="App">
   <Router>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/homeMesero">
          <VistaMesero />
        </Route>
        <Route path="/Pedidos/:mesa">
          <Pedidos />
        </Route>
        <Route path="/homeChef">
          <VistaChef />
        </Route>
        <Route path="/EstadoPedidos">
          <EstadoPedidos />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}



export default App;

