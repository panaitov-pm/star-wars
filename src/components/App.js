import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from './Authorization/SignIn';
import Categories from './categories';
import Navigation from './layout/Navigation';

class App extends Component {
  render() {
    return (
        <Fragment>
        <Navigation />
      <div className="container">
	      <Switch>
	          <Route path="/categories" component={Categories} />
	          <Route path="/sign-in" component={SignIn} />
	      </Switch>
      </div>
        </Fragment>
    );
  }
}

export default App;
