import React from 'react';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import PaymentGateway from './components/PaymentGateway';
import OtpVerification from './components/OtpVerification';
import PaymentFailure from './components/PaymentFailure';
import PaymentSuccess from './components/PaymentSuccess';
import { makeStyles, CssBaseline } from '@material-ui/core';
import ProtectedRoute from './components/ProtectedRoute';

const useStyles=makeStyles({
  root:{
    width: '100%',
  }
})
function App() {
  const classes=useStyles();
  return (
    <div className="recipe_app" className={classes.root}>
      <CssBaseline/>
      <Switch>
        <ProtectedRoute exact path="/" Component={HomePage}/>
        <Route path="/payment" render={(props) => <PaymentGateway {...props} />} />
        <Route path="/verifyotp" render={(props) => <OtpVerification {...props} />} />
        <Route path="/paymentFailure" render={(props) => <PaymentFailure {...props} />} />
        <Route path="/paymentSuccess" render={(props) => <PaymentSuccess {...props} />} />
        <Route path="*" render={(props) => <h1>Page Not Found</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
