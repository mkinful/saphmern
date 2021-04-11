import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { About } from './components/About';
import { Pharmacy } from './components/Pharmacy';
import PrivateRoute from './components/routing/privateRoute';
import Welcome from './components/Welcome';
import Footer from './components/Footer/Index';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import PrivateScreen from './screens/privateScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import ForgotScreen from './screens/forgotScreen';
import ResetScreen from './screens/resetScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Side from './components/Side';

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
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotScreen}/>
          <Route exact path="/passwordreset/:resetToken" component={ResetScreen}/>
          <PrivateRoute exact path="/privatescreen" component={PrivateScreen}/>
          <Redirect from="/" to="/welcome" />
        </Switch>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;