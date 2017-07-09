import React from 'react';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import App3 from './App3';
import Home from '../components/App4/Home';
import Contact from '../components/App4/Contact';

export default function App4() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink exact to="/app4" activeClassName="activeRoute">
            App4 Home
          </NavLink>
          <NavLink exact to="/app4/contacts" activeClassName="activeRoute">
            Contacts
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/app4" component={Home} />
          <Route exact path="/app4/contacts" render={() => <App3 withLink />} />
          <Route path="/app4/contacts/:email" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
