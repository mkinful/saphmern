import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Side from './components/Side';
import { About } from './components/About';
import { Pharmacy } from './components/Pharmacy';
import Login from './components/Login/Login';
import Account from './components/Login/Account';
import Welcome from './components/Welcome';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <Side show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
        <Route exact path="/" component={Welcome}/>
          <Route exact path="/homescreen" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/pharmacy" component={Pharmacy}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/account" component={Account}/>
          <Redirect from="/" to="/welcome" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;