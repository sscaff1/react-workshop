import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import App1 from './pages/App1';
import App2 from './pages/App2';
import App3 from './pages/App3';
import App4 from './pages/App4';
import './App.css';

const LINKS = [
  { to: '/', name: 'Home' },
  { to: '/app1', name: 'App 1' },
  { to: '/app2', name: 'App 2' },
  { to: '/app3', name: 'App 3' },
  { to: '/app4', name: 'App 4' },
];

export default function App() {
  return (
    <div>
      <nav>
        {LINKS.map((link, i) =>
          <Link key={`link-${i}`} to={link.to}>
            {link.name}
          </Link>
        )}
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app1" component={App1} />
        <Route exact path="/app2" component={App2} />
        <Route exact path="/app3" component={App3} />
        <Route exact path="/app4(.*)" component={App4} />
      </Switch>
    </div>
  );
}
