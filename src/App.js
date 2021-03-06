import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {Menu,Grid,Image} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import Foodmenu from './Container/Menu'
import 'semantic-ui-css/semantic.min.css';
import Addmenu from './Container/addMenu'
class App extends Component {
  render() {
    return (


<Router>
    <div>
      <Switch>
         <Route  exact={true} path="/" component={Foodmenu}/>
         <Route  path="/addmenu" component={Addmenu}/>
         <Route   component={Foodmenu}/>
    </Switch>   
  </div>

</Router>
    );
  }
}

export default App;
